from flask import Flask, request, jsonify,render_template

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def main():
    return 'Please add user id at the end of the url'

@app.route('/<int:id>', methods=['GET'])
def home(id):
    return render_template('index.html',id=id)

if __name__ == '__main__':
    app.run(debug=True,port=5000,host='0.0.0.0')