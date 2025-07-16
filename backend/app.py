from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # permite que React acceda

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def hello():
    return "Hola mundo"

@app.route('/projects')
def get_projects():
    conn = get_db_connection()
    projects = conn.execute('SELECT * FROM projects').fetchall()
    conn.close()
    return jsonify([dict(row) for row in projects])

if __name__ == '__main__':
    app.run(debug=True)
