let words = [ 
    { jumbled : "paple", correct : "apple"},
    { jumbled : "oretucmp", correct : "computer"},
    { jumbled : "hwtca", correct : "watch"},
    { jumbled : "erists", correct : "resist"},
    { jumbled : "ubissnse", correct : "business"},
    { jumbled : "monter", correct : "mentor"},
    { jumbled : "nesbignre", correct : "beginner"},
    { jumbled : "decountai", correct : "education"},
    { jumbled : "earntofon", correct : "afternoon"},
    { jumbled : "ortsp", correct : "sport"}
];

let flag = false;
let currentWordIndex = 0;
let score = 0;
let currentWord = 1;

function displayWord() {
    if(flag){
        let innerHtml = `<div></div>`
        document.querySelector('#display').innerHTML = innerHtml;
    }

    if (currentWord <= words.length) {
        document.querySelector("#jumbled_word").innerText = words[currentWordIndex].jumbled;
        document.querySelector("#score").innerText = score;
    }
}

displayWord();

function checkWord() {
    if(currentWord > words.length) {
        alert("Final Score : "+ score);
        playAgain();
        return;
    }        

    let answer = document.querySelector('#ip_word').value;
    
    if(answer.toLowerCase() === words[currentWordIndex].correct.toLowerCase())
        score++;

    currentWordIndex++;    
    currentWord++;
    displayWord();
    document.querySelector('#ip_word').value = "";    
}

function playAgain() {
    flag = true;
    if (flag) {
        let innerHtml = `<div>
            <h1>Game Over...!!!</h1>
            <button class="btn button" onclick="displayWord()">Play Again</button>
        </div>`
        currentWordIndex = 0;
        score = 0;
        currentWord = 1;
        document.querySelector('#display').innerHTML = innerHtml;
    }
}