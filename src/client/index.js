import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

import {fetchData} from "./js/network-utils";
import {scoreTagText} from "./js/sentiment-helper";

let apiKey = ''

const host = 'http://localhost:8080'

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
    document.getElementById('results').innerHTML = `<h3>${scoreTagText(scoreTag)}</h3>`
}

window.addEventListener('load', () => {
    fetchData(`${host}/creds`)
        .then(data => apiKey = data.key)
        .catch(e => console.log('Error:', e))
})

document.getElementById('submit').addEventListener('click', () => {
    const text = document.getElementById('name').value
    loadSentimentAnalysis(sentimentUrl(text))
})