from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests

# import config

# APIKEY = config.apiKey
APIKEY = '7013a961703649e5bd264c33ce9e5d18'

def get_top(keyword, country ='in', category =''):
    url = 'https://newsapi.org/v2/top-headlines'

    params = {
        'q': keyword,
        'country': country,
        'category': category,
        'apiKey': APIKEY
    }

    src = requests.get(url, params=params)

    articles = src.json()['articles']

    return jsonify({'articles': articles})

app = Flask(__name__, static_folder='../build', static_url_path='')
CORS(app)

@app.route("/news", methods=['POST'])
@cross_origin()
def news():
    data = request.json
    print(data["keyword"])
    return get_top(data["keyword"], data["country"])

def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
