# nlp
### Udacity FEND Project 4

This project analyzes text and determines the sentiment (positive, negative, etc).

## How to run

### 1. Add MeaningCloud API Key
Sign up for [MeaningCloud Sentiment Analysis API key](https://www.meaningcloud.com/developer/sentiment-analysis). 
In `.env` replace 'YOUR_API_KEY' w/ the your new api key.

### 2. Run
```
npm i
npm run build-prod
npm start
```
Open http://localhost:3000/ in browser to view.

## Run tests
`npm test`

## Run Dev w/ Automatic Refresh
Start prod (See 'How to run' above) and while that is running, in a separate terminal enter the following:
```
npm i -D
npm run build-dev
```
This should automatically open a tab in browser at http://localhost:9000/ 