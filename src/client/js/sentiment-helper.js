export function scoreTagText(tag = 'NONE') {
    switch (tag) {
        case 'P+':
            return '😀 Very Positive'
        case 'P':
            return '🙂 Positive'
        case 'NEU':
            return '😐 Neutral'
        case 'N':
            return '🙁 Negative'
        case 'N+':
            return '☹️ Very Negative'
        default:
            return 'None'
    }
}