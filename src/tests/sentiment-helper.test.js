import {scoreTagText} from "../client/js/sentiment-helper";

test('very positive label', () => {
    expect(scoreTagText('P+')).toBe('Very Positive')
})

test('positive label', () => {
    expect(scoreTagText('P')).toBe('Positive')
})

test('neutral label', () => {
    expect(scoreTagText('NEU')).toBe('Neutral')
})

test('negative label', () => {
    expect(scoreTagText('N')).toBe('Negative')
})

test('very negative label', () => {
    expect(scoreTagText('N+')).toBe('Very Negative')
})

test('none label', () => {
    expect(scoreTagText('NONE')).toBe('None')
})
