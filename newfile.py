from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route('/d.mp4')
def serve_video():
    return send_from_directory('.', 'd.mp4')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/content')
def content():
    return render_template('content.html')
  
