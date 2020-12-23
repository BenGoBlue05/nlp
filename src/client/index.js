import './styles/main.scss'

import {fetchData} from "./js/network-utils";
import {scoreTagText} from "./js/sentiment-helper";

let apiKey = ''

const resultsDiv = document.getElementById('results')

function sentimentUrl(text = '') {
    return `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${text}`
}

function loadSentimentAnalysis(url = '') {
    fetchData(url)
        .then((data) => updateUI(data))
        .catch(e => console.log('Error:', e))
}

function updateUI(data = {}) {
    const scoreTag = data.score_tag
    resultsDiv.innerHTML = `<h3>${scoreTagText(scoreTag)}</h3>`
}

window.addEventListener('load', () => {
    fetchData('/api/key')
        .then(data => apiKey = data.key)
        .catch(e => console.log('Error:', e))
})

document.getElementById('submit').addEventListener('click', () => {
    const text = document.getElementById('text_input').value
    if (!text || text.trim().length === 0) {
        alert('Please enter text')
    } else {
        resultsDiv.innerHTML = `<h3>...</h3>`
        loadSentimentAnalysis(sentimentUrl(text))
    }
})