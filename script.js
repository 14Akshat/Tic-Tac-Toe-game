let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#btn");
let resetBtn = document.querySelector("#btn-hide");
let msgBar = document.querySelector("#msg-bar");
let msg = document.querySelector("#msg");

let turn0 = true;
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            return pos1Val;
        }
    }
    return null;
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showPopupBar = (message) => {
    msg.innerText = message;
    msgBar.classList.remove("hide");
    setTimeout(() => {
        msgBar.classList.add("show");
    }, 100);
};

const hidePopupBar = () => {
    msgBar.classList.remove("show");
    setTimeout(() => {
        msgBar.classList.add("hide");
    }, 500);
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        const winner = checkWinner();
        if (winner) {
            showPopupBar(`Winner is ${winner}`);
            disableAllBoxes();
            gameOver = true;
            newGameBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
        } else if (Array.from(boxes).every(box => box.innerText !== "")) {
            showPopupBar("It's a tie!");
            gameOver = true;
            newGameBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
        }
    });
});

newGameBtn.addEventListener("click", () => {
    enableAllBoxes();
    hidePopupBar();
    gameOver = false;
    turn0 = true;
});

resetBtn.addEventListener("click", () => {
    enableAllBoxes();
    hidePopupBar();
    gameOver = false;
    turn0 = true;
    newGameBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
});
