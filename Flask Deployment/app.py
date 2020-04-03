# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/submit', methods = ['POST'])
def sumbit():
    if request.method == 'POST':
        name = request.form['name']
        profession = request.form['profession']
        rating = request.form['rating']
        comments = request.form['comments']
        print(name, profession, rating, comments)
        return render_template("success.html")


if __name__=="__main__":
    app.run(debug=True)

