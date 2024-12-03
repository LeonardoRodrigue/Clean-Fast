from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Dados das diaristas (podem ser extraídos de um banco de dados ou um arquivo JSON)
diaristas = [
    {
        'id': 1,
        'nome': 'Ana Clara',
        'imagem': 'images/profissional1.png',
        'avaliacao': 4.5,
        'tempo': 'há 1 ano',
        'recomendacoes': 2,
        'preco': 'R$150'
    },
    {
        'id': 2,
        'nome': 'Maria Eduarda',
        'imagem': 'images/profissional2.png',
        'avaliacao': 4.3,
        'tempo': 'há 4 meses',
        'recomendacoes': 9,
        'preco': 'R$140'
    },
    {
        'id': 3,
        'nome': 'Judite Maria',
        'imagem': 'images/profissional3.png',
        'avaliacao': 4.2,
        'tempo': 'há 1 mês',
        'recomendacoes': 10,
        'preco': 'R$100'
    },
    {
        'id': 4,
        'nome': 'Cleusa Marques',
        'imagem': 'images/profissional4.png',
        'avaliacao': 4.1,
        'tempo': 'há 7 meses',
        'recomendacoes': 7,
        'preco': 'R$90'
    },
    {
        'id': 5,
        'nome': 'Juliana Dias',
        'imagem': 'images/profissional5.png',
        'avaliacao': 4.0,
        'tempo': 'há 11 meses',
        'recomendacoes': 12,
        'preco': 'R$70'
    }
]

@app.route('/')
def index():
    return render_template('index.html')

from flask import jsonify

@app.route('/api/diaristas')
def get_diaristas():
    diaristas = [
    {
        'id': 1,
        'nome': 'Ana Clara',
        'imagem': 'images/profissional1.png',
        'avaliacao': 4.5,
        'tempo': 'há 1 ano',
        'recomendacoes': 2,
        'preco': 'R$150'
    },
    {
        'id': 2,
        'nome': 'Maria Eduarda',
        'imagem': 'images/profissional2.png',
        'avaliacao': 4.3,
        'tempo': 'há 4 meses',
        'recomendacoes': 9,
        'preco': 'R$140'
    },
    {
        'id': 3,
        'nome': 'Judite Maria',
        'imagem': 'images/profissional3.png',
        'avaliacao': 4.2,
        'tempo': 'há 1 mês',
        'recomendacoes': 10,
        'preco': 'R$100'
    },
    {
        'id': 4,
        'nome': 'Cleusa Marques',
        'imagem': 'images/profissional4.png',
        'avaliacao': 4.1,
        'tempo': 'há 7 meses',
        'recomendacoes': 7,
        'preco': 'R$90'
    },
    {
        'id': 5,
        'nome': 'Juliana Dias',
        'imagem': 'images/profissional5.png',
        'avaliacao': 4.0,
        'tempo': 'há 11 meses',
        'recomendacoes': 12,
        'preco': 'R$70'
    }
]
    return jsonify(diaristas)


if __name__ == '__main__':
    app.run(debug=True)
