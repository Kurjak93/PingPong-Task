//creating objects for players
const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
//gets reset and winNumSelect from html by ID
const resetButton = document.querySelector('#reset');
const winNumSelect = document.querySelector('#winNum');
//variable for winScore
let winScore = 3;
//variable for game over
let isOver = false;
//function reset
function reset() {
    isOver = false;
    for(let p of [player1,player2]){
        p.score =0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    } 
}
//function for winning number - change
winNumSelect.addEventListener('change', function() {
    winScore = parseInt(this.value);
    reset();
})
//function for player - click
function updateScore(player, opponent){
    if(!isOver){
        player.score +=1;
        if(player.score === winScore){
            isOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
//function for player1 and player2 - click
player1.button.addEventListener('click', function() {
    updateScore(player1,player2)
})
player2.button.addEventListener('click', function() {
    updateScore(player2,player1)
})
//function for reset - click
resetButton.addEventListener('click', reset)