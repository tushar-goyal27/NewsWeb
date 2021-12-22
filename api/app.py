from flask import Flask, jsonify, request
from flask_cors import CORS
import requests


def get_top(keyword, country ='in', category =''):
    url = 'https://newsapi.org/v2/top-headlines'

    params = {
        'q': keyword,
        'country': country,
        'category': category,
        'apiKey': '7013a961703649e5bd264c33ce9e5d18'
    }

    src = requests.get(url, params=params)

    articles = src.json()['articles']

    return jsonify({'articles': articles})

app = Flask(__name__)
CORS(app)

@app.route("/news", methods=['POST'])
def news():
    data = request.json
    print(data["keyword"])
    return get_top(data["keyword"], data["country"])

