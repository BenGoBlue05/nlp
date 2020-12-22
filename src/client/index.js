import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

let apiKey = ''

const host = 'http://localhost:8080'

function sentimentUrl(text = '') {
    return `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${text}`
}

function loadSentimentAnalysis(url = '') {
    fetch(url)
        .then(res => res.json())
        .then((data) => updateUI(data))
        .catch(e => console.log('Error:', e))
}

function scoreTagText(tag = 'NONE') {
    switch (tag) {
        case 'P+':
            return 'Very Positive'
        case 'P':
            return 'Positive'
        case 'NEU':
            return 'Neutral'
        case 'N':
            return 'Negative'
        case 'N+':
            return 'Very Negative'
        default:
            return 'None'
    }
}

function updateUI(data = {}) {
    const scoreTag = data.score_tag
    document.getElementById('results').innerHTML = `<h3>${scoreTagText(scoreTag)}</h3>`
}

window.addEventListener('load', () => {
    fetch(`${host}/creds`)
        .then(data => data.json())
        .then(data => {
            apiKey = data.key
            console.log(`key: ${apiKey}`)
        })
        .catch(e => console.log('Error:', e))
})

document.getElementById('submit').addEventListener('click', () => {
    const text = document.getElementById('name').value
    loadSentimentAnalysis(sentimentUrl(text))
})