let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    //generate computer choice
     const compchoice = gencompchoice();

     if(userchoice === compchoice) {
        //Draw Game
        drawGame();
     } else {
        let userwin = true;
        if(userchoice === "rock") {
            //scissors, paper
           userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            //rock , scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
     }
};


choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
     });
});