from flask import Flask, render_template

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/content')
def content():
    return render_template('content.html')
  
