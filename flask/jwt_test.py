import json
import logging
import uuid
import hashlib

logging.getLogger().setLevel(logging.INFO)

# mongoDB connection
from pymongo import MongoClient

# flask imports
from flask import Flask, request, jsonify #, make_response
from werkzeug.security import generate_password_hash, check_password_hash

# imports for pyJWT authentication
from flask_jwt_extended import create_access_token, JWTManager, jwt_required
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)

#local connection string
client = MongoClient("mongodb://localhost:27017")
db = client["mydatabase"]
users_collection = db["users"]

# initialize JWTManager
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "your_secret_key"
#token lifespan defined
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)

@app.route("/")
def hello_world():
    return "Hello world"

@app.route("/api/v1/users", methods=["POST"])
def register():
    #store the json body request
    new_user = request.get_json()
    # encrypt password
    new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() 
    # check if user exists
    doc = users_collection.find_one({"username": new_user["username"]})

    if not doc:
        users_collection.insert_one(new_user)
        return jsonify({'msg': 'User created successsfully'}), 201

    else:
        return jsonify({'msg': 'Username already exists'}), 409


@app.route("/api/v1/login", methods=["POST"])
def login():
    # store the json body request
    login_details = request.get_json() 
    logging.info(login_details)
    # search for username in database
    user_from_db = users_collection.find_one({'username': login_details['username']})

    if user_from_db:
        encrypted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
        if encrypted_password == user_from_db['password']:
            # create jwt token
            access_token = create_access_token(identity=user_from_db['username'])
            return jsonify(access_token=access_token), 200

    return jsonify({'msg': 'The username or password is incorrect'}), 401

if __name__ == '__main__':
    app.run(debug=True)


