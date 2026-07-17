from flask import Flask, render_template

app = Flask(__name__)

# Trang câu hỏi (đường dẫn chính)
@app.route('/')
def home():
    return render_template('index.html') 

# Trang nội dung (đường dẫn khi chọn đúng)
@app.route('/content')
def content():
    return render_template('content.html') 

if __name__ == '__main__':
    app.run(debug=True)
9