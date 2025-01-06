// const boxes = document.querySelectorAll('.box');
// let currentPlayer = 'X';
// let gameOver = false;

// boxes.forEach(box => {
//     box.addEventListener('click', () => {
//         if (!box.textContent && !gameOver) {
//             box.textContent = currentPlayer;
//             if (checkWinner()) {
//                 setTimeout(() => alert(`${currentPlayer} wins!`), 100);
//                 gameOver = true;
//                 setTimeout(resetGame, 2000);
//             } else if (isTie()) {
//                 alert("The Match is Tie.");
//                 gameOver = true;
//                 setTimeout(resetGame, 2000);
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             }
//         }
//     });
// });

// function checkWinner() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8],
//         [0, 3, 6], [1, 4, 7], [2, 5, 8],
//         [0, 4, 8], [2, 4, 6]
//     ];

//     return winPatterns.some(pattern => {
//         const [a, b, c] = pattern;
//         return boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent;
//     });
// }

// function isTie() {
//     return [...boxes].every(box => box.textContent !== '');
// }

// function resetGame() {
//     boxes.forEach(box => box.textContent = '');
//     gameOver = false;
// }

let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#newgame-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let hide = document.querySelector('.hide');

let turnO = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
        } else {
            alert("Box already filled.");
        }
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (Winner) => {
    msg.innerHTML = `Congratulations, Winner is ${Winner}.`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`${pos1val} Winner`);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);