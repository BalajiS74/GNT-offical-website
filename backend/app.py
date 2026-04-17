from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",        # your mysql username
    password="your_password",  # your mysql password
    database="meet_db"
)

cursor = db.cursor()

# Insert Data
@app.route("/submit-meet", methods=["POST"])
def submit_meet():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    query = "INSERT INTO meet (name, email, message) VALUES (%s, %s, %s)"
    values = (name, email, message)

    cursor.execute(query, values)
    db.commit()

    return jsonify({"message": "Data saved to MySQL 🚀"})

# Get Data
@app.route("/get-meet", methods=["GET"])
def get_meet():
    cursor.execute("SELECT * FROM meet")
    rows = cursor.fetchall()

    data = []
    for row in rows:
        data.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "message": row[3]
        })

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)