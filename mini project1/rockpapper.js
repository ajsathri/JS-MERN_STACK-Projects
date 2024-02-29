let userScore = 0;
let compScore = 0;
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");




const choices =document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const genCompChoice = () => {
   const options = ["rocks","paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
    //rock,paper,scissors


};

const drawgame = () => {
   
    message.innerText = "game was a draw! / Play Again!";
    message.style.backgroundColor = "black";
    
    
};

const showwinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        
        message.innerText = `you win! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor= "green";

    } else{
        compScore++;
        compScorepara.innerText = compScore;
        message.innerText = `you lose! ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
        
    }

}


const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);


    //generator computer choice->modular

    if(userChoice === compChoice){
        //draw game
        drawgame();

    } else {
        let userwin = true;
        if(userChoice === "rock"){
            //scissors paper
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userwin = compChoice === "scissors" ? false : true;

        } else {
            //rock ,paper
            userwin = compChoice === "rock" ? false : true;

        }
        showwinner(userwin, userChoice, compChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);



    });
});