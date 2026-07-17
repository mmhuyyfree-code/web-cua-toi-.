from flask import Flask, render_template
app = Flask(__name__)

# Trang câu hỏi (đường dẫn chính)
@app.route('/')
def home():
    return render_template('index.html')

# Trang nội dung
@app.route('/content')
def content():
    return render_template('content.html')

# Dòng này QUAN TRỌNG: bạn phải xóa hoặc dùng dấu # để vô hiệu hóa nó
# if __name__ == '__main__':
#     app.run(debug=True)
