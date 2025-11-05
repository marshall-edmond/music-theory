from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/theory')
def theory():
    return render_template('theory.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/generate')
def generate():
    return render_template('generate.html')


if __name__ == '__main__':
    app.run(debug=True)