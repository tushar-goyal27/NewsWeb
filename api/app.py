import os

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS, cross_origin
import requests
from dotenv import load_dotenv

load_dotenv()

APIKEY = os.getenv('APIKEY')

app = Flask(__name__, static_folder='../build', static_url_path='')
# app = Flask(__name__)
CORS(app)

@app.route("/news", methods=['GET'])
@cross_origin()
def news():
    keyword = request.args.get('keyword')
    url = 'https://newsapi.org/v2/everything'
    params = {
        'q': keyword,
        'apiKey': APIKEY
    }

    src = requests.get(url, params=params)
    articles = src.json()['articles']

    return jsonify({'articles': articles})

@app.route("/headlines", methods=['GET'])
@cross_origin()
def headlines():
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'country': 'in',
        'apiKey': APIKEY
    }

    src = requests.get(url, params=params)
    articles = src.json()['articles']

    return jsonify({'articles': articles})

@app.route("/", methods=['GET'])
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
