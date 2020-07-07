from flask import Flask, render_template
from models.productos import Productos
import json

server = Flask(__name__)

@server.route('/store', methods=['POST'])
def store():
    return(json.dumps(Productos))

@server.route('/store', methods=['GET'])
def store_tienda():
    return render_template("tienda.html")


@server.route('/')
def main():
    return render_template("index.html")


if __name__ == '__main__':
    server.run(debug=True)
