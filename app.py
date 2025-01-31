from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/aboutme")
def aboutme():
    return render_template("aboutme.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/test")
def test():
    return "test"

@app.route("/test2")
def test2():
    return "test2"

if __name__ == "__main__":
    app.run(port=3023, debug=True)