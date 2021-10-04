//gets elements from html by ID
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winNumSelect = document.querySelector('#winNum');
//variable for score
let p1Score=0;
let p2Score=0;
//variable for winScore
let winScore = 3;
//variable for game over
let isOver = false;
//function reset
function reset() {
    isOver = false;
    p1Score = 0;
    p2Score = 0;   
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;  
}
//function for winning number - change
winNumSelect.addEventListener('change', function() {
    winScore = parseInt(this.value);
    reset();
})
//function for player - click
p1Button.addEventListener('click', function() {
    if(!isOver){
        p1Score +=1;
        if(p1Score === winScore){
            isOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function() {
    if(!isOver){
        p2Score +=1;
        if(p2Score === winScore){
            isOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})
//function for reset - click
resetButton.addEventListener('click', reset)