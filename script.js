// console.log("hello")
// let titleDiv=document.getElementById('title')
// console.log(titleDiv.innerText)

//changing the contents of the html using js
// titleDiv.innerText='Goodbye!'

// let message="Good Morning!"

// titleDiv.innerText=message;

//changing the innerHTML
// titleDiv.innerHTML='<p>HELLO</p>'

//using template literals and replacing the HELLO with the message


// titleDiv.innerHTML=`<p>${message}</p>`

// titleDiv.style.color='red'

// let redDiv=document.getElementById('red')
// let yellowDiv=document.getElementById('yellow')
// let greenDiv=document.getElementById('green')

// let clickedDiv=document.getElementById('clicked')

// redDiv.onclick=()=>clickedDiv.innerHTML='<p>Red is clicked</p>'
// yellowDiv.onclick=()=>clickedDiv.innerHTML='<p>Yellow is clicked</p>'
// greenDiv.onclick=()=>clickedDiv.innerHTML='<p>Green is clicked</p>'

//loopig for the onclick property rather than write multiple times


//selects all the sqaures at once
// const squares=document.querySelectorAll('.colorSqaure')
// let clickedDiv=document.getElementById('clicked')

//using forEach loop, we loop through

// squares.forEach(square=>{
//     square.onclick=()=>console.log(sqaure.value)
// })

//telling the number of times the squares were clicked

const squares=document.querySelectorAll('.colorSquare')
const timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square=>{
    square.onclick=()=>{
        timesClicked[square.value]+=1
        square.innerText=timesClicked[square.value]
    }
})

//to clear the numbers 

const clearGameBtn=document.getElementById('clear-game')
function clearScores(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach(square=>{
        square.innerText=''
    })
}
clearGameBtn.onclick=()=>clearScores()

