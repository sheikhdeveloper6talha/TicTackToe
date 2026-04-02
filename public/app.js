let gameContainer = document.getElementById('gameContainer')
let Users = document.getElementById('Users')
let footer = document.getElementById('footer')
// let cells = Array(9).fill('')
let cells = ['' , '' ,'' , '' , '' , '' , '' , '' , '']
let currentUsers = 'X'

function renderTick (){
    gameContainer.innerHTML = ''
    cells.forEach((items , index)=>{
let div = document.createElement('div')
div.classList.add('cells')
div.innerHTML = items
div.addEventListener('click' , function (){
checkUesersVal(index)
})
gameContainer.append(div)
    })
}

function checkUesersVal(index){
    if(cells[index] === ''){
    cells[index] = currentUsers
    currentUsers = currentUsers === 'X' ? 'O' : 'X'
Users.innerHTML = currentUsers
}
console.log('working');
checkAnswer()
renderTick()
}
function checkAnswer(){
    let winnerPettern = [
        [0 , 1 ,2], [3,4,5] , [6,7,8],
        [0,3,6] , [1,4, 7] , [2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let pettren of  winnerPettern){
        const [a , b ,c] = pettren
        console.log('A ki value'  ,cells[a] ,'A ki index' , a , 'B ki value' , cells[b] , 'B ki index' , b  , 'C ki value' , cells[c] , 'B ki index' , b);
        
       
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
 let h1 = document.createElement('h1')
 h1.innerHTML = `Wniner Users ${cells[a]}` 
 console.log(winnerPettern);
 
 footer.append(h1)
gameContainer.style.pointerEvents = 'none'
bottomFooter()
console.log('cells a' , cells[a]);
console.log('cells b' , cells[b]);
console.log('cells c' , cells[c]);
console.log(cells);

return
        }
     
        
    }
    if(!cells.includes('')){
        
    showFooter()
    }
}
function restartGame() {
    cells = ['' , '' ,'' , '' , '' , '' , '' , '' , '']
    currentUsers = 'X'
    gameContainer.style.pointerEvents = 'auto'
    footer.innerHTML = ''

    renderTick()
}
function showFooter(){
let h1 = document.createElement('h1')
  let btn = document.createElement('button')
        btn.innerHTML = 'Restart Game'
        btn.addEventListener('click' , function(){restartGame()})
   
        h1.innerHTML = 'Game Draw!'
        footer.append(h1)
        footer.append(btn)
}
function bottomFooter(){
     let btn = document.createElement('button')
        btn.innerHTML = 'Restart Game'
        btn.addEventListener('click' , function(){restartGame()})
   
    footer.append(btn)
}
renderTick()



 


