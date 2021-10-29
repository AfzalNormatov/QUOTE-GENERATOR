const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote');
const loader = document.querySelector('.loader');

let apiQuotes = [];

function loading() {
    loader.hidden =  false;
    quoteContainer.hidden = true;
}

function complete() {
    loader.hidden =  true;
    quoteContainer.hidden = false;
}

function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
    complete();
}


   


async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch{

    }
}

newQuoteBtn.addEventListener('click', newQuote);
 
getQuotes();
