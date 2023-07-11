from flask import Flask, render_template
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'g!=lk7k!46nxqg872l^i*p')


@app.route('/')
def index():
    return render_template("index.html")
