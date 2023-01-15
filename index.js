let reset = document.getElementsByClassName('reset')[0];

let box=Array.from(document.getElementsByClassName('box'));

let player="X";

let gameOver = false;

let cnt=0;

const changePlayer = () => {
    return player === "X"?"0":"X";
}

let wonOrNot = () => {
    const boxText = document.querySelectorAll('.boxText');
    let array = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    array.forEach(pos => {
        if(boxText[pos[0]].innerText === boxText[pos[1]].innerText && boxText[pos[1]].innerText === boxText[pos[2]].innerText && boxText[pos[0]].innerText!=""){
            gameOver = true;
            document.getElementById('result').innerText = `player 
            ${boxText[pos[0]].innerText} has won`;
        }
    })
}

box.forEach(element => {
    element.addEventListener('click',()=>{
        cnt++;
        const boxText = element.querySelector('.boxText');
        const chance = document.getElementsByClassName('chance')[0];
        if(boxText.innerText === "" && gameOver === false){
        boxText.innerText=`${player}`;
        wonOrNot();
        player = changePlayer();
        const turn = chance.querySelector('.player');
        turn.innerText = player;
        }

        if(cnt==9 && gameOver===false){
            document.getElementById('result').innerText = "Game drawn"
        }
    })
})

reset.addEventListener('click',()=>{
    const boxText = Array.from(document.getElementsByClassName('boxText'));
    const chance = document.getElementsByClassName('chance')[0];
    gameOver = false;
    document.getElementById('result').innerText = "running";
    boxText.forEach(element => {
        // console.log(element.innerHTML);
        element.innerText="";
    });
    player = "X";
    const turn = chance.querySelector('.player');
    turn.innerText = player;
    cnt=0;
})