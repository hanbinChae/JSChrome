const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein", 
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

