let btns = document.querySelectorAll('.item');
let reset = document.querySelector('#reset-btn');
let newGame =document.querySelector('#new-btn')
let winner = document.querySelector('#winner');
let divOfWin = document.querySelector('.hide');


let win =[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

let value = true;
let counter =0;
btns.forEach((box) =>{
    box.addEventListener('click',()=>{
        if(value){
            box.innerText ="X";
            value=false;
            counter=counter+1;
                }
        else{
            box.innerText="O";
            value=true;
            counter=counter+1;
        }
        box.disabled=true;
        checkWinner();
    });
    
    
})

const checkWinner =()=>{
    console.log(counter);
    for (let pattern of win) {
       
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        

        if(pos1!=""&& pos2!=""&& pos3!=""){
            if (pos1===pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
        if(counter===9){
            checkDraw();
        }
       
    }
};



newGame.addEventListener('click',()=>{
    removeText();
});

reset.addEventListener('click',()=>{
    removeText();
});


let showWinner = (position) =>{
    hide();
    btns.forEach(box => {
        box.disabled= true;
    });
    winner.innerText="Congratulation Winner is " + position;
    console.log(`"Winner is ${position}"`);

} 
let checkDraw = ()=>{
    hide();
    winner.innerText = "Match is Draw"
}

let hide =() =>{
    divOfWin.classList.remove('hide');
    divOfWin.classList.add('new');
}
function removeText(){
    counter=0;
    btns.forEach(box => {
        box.innerText = "";
        divOfWin.classList.remove('new');
        divOfWin.classList.add('hide')
        box.disabled=false;
    });
}


/*
disabled -
hide -
button -
tie -
Add background
*/

