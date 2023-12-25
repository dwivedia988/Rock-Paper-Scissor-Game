const  choices = document.querySelectorAll(".choice");
const outputMsg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
};

const gameDraw = () => {
    outputMsg.innerText = "Game was a Draw. Play Again.";
    outputMsg.style.backgroundColor = "darkblue";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        outputMsg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        outputMsg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        outputMsg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        outputMsg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
      let userChoice = choice.getAttribute("id");  
      playGame(userChoice);
    });
});