import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

const apiKey = '9a9113df4a0c4b02c2a4102247f992b1'

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

document.getElementById('submit').addEventListener('click', () => {
    const text = document.getElementById('name').value
    loadSentimentAnalysis(sentimentUrl(text))
})