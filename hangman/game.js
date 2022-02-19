function gameOver()
{
    var gameOverScreen = document.getElementById("gameOver")
    gameOverScreen.style.visibility = "visible"
    var wordarea = document.getElementById("wordarea")
    var textboxes = document.getElementById("textboxes")
    var messageArea = document.getElementById("messageArea")
    wordarea.style.opacity = 10 + "%"
    textboxes.style.opacity = 10 + "%"
    messageArea.style.opacity = 10 + "%"
}
var score = 0
var words = [
    "YUSUF", "HANGMAN", "SOFTWARE", "ENGINEERING",
    "PROJECT", "APP", "İSTANBUL", "ANTALYA",
    "SPORT", "DESIGN", "E COMMERCE", "PHOTOSHOP",
    "PROGRAMMING", "AYVANSARAY", "WEBSITE", "GAME",
]
var randomWordIndex = Math.floor(Math.random()*words.length)
var randomWord = words[randomWordIndex]

function Keyboard()
{
    var wordarea = document.createElement("div")
    wordarea.id="wordarea"
    wordarea.align="center"
    document.body.appendChild(wordarea)
    var messageArea = document.createElement("div")
    messageArea.id="messageArea"
    document.body.appendChild(messageArea)
    var keyboard = document.createElement("div")
    keyboard.id="keyboard"
    messageArea.append(keyboard)
    var keyboard = document.getElementById("keyboard")
    var keys = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "Ğ", "Ü", "A", "S", "D", "F", "G", "H", "J", "K",
        "L", "Ş", "İ", "Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç",
    ]
    var wordarea = document.getElementById("wordarea")
    for(var i = 0; i < randomWord.length; i++)
    {
        var letter = document.createElement("span")
        if(randomWord[i]==" ")
        {
            letter.style.visibility="hidden"
        }
        letter.className = "letter"
        if(letter.textContent == "")
            letter.style.backgroundColor = "white"
        wordarea.append(letter)
    }
    keys.forEach(key=>{
        var buttonElement = document.createElement("button")
        buttonElement.textContent = key
        buttonElement.className = "keys"
        buttonElement.setAttribute("id",key)
        buttonElement.addEventListener("click",function handleClick(){
            var n = 0
            var letters = document.getElementsByClassName("letter")
            buttonElement.style.visibility =  "hidden"
            for(var i = 0; i < letters.length; i++)
            {
                if(key == randomWord[i])
                {
                    letters[i].innerHTML = key
                    letters[i].style.backgroundColor = "green"
                    n++
                }
            }
            if(n <= 0)
            {
                Wrong++
                hangmanAnimation(Wrong,score)
            }
            var m = 0;
            for(var i = 0; i < letters.length; i++)
            {
                if(letters[i].innerHTML == "")
                {
                    m++
                }
            }
            if(m <= 0)
            {
                Wrong = 0
                score += 10
                hangmanAnimation(Wrong,score)
                wordarea.parentNode.removeChild(wordarea)
                messageArea.parentNode.removeChild(messageArea)
                keyboard.parentNode.removeChild(keyboard)
                words.splice(randomWordIndex,1)
                randomWordIndex = Math.floor(Math.random()*words.length)
                randomWord = words[randomWordIndex]
                onloadContent()
            }
        })
        keyboard.append(buttonElement)
    })
}
function manHead(face_expression)
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(160,120,35,0,2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(145,115,5,0,2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(175,115,5,0,2*Math.PI)
    ctx.stroke()
    if(face_expression == "happy")
    {
        ctx.beginPath()
        ctx.moveTo(150,130)
        ctx.bezierCurveTo(150, 140, 170, 140, 170, 130);
        ctx.stroke()
    }
    if(face_expression == "normal")
    {
        ctx.beginPath()
        ctx.moveTo(150,135)
        ctx.lineTo(170,135)
        ctx.stroke()
    }
    if(face_expression == "sad")
    {
        ctx.beginPath()
        ctx.moveTo(150,140)
        ctx.bezierCurveTo(150, 130, 170, 130, 170, 140);
        ctx.stroke()
    }
}
function manRightArm()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,155)
    ctx.lineTo(220,195)
    ctx.stroke()
}
function manLeftArm()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,155)
    ctx.lineTo(100,195)
    ctx.stroke()
}
function manBody()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,155)
    ctx.lineTo(160,260)
    ctx.stroke()
}
function manRightFoot()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,260)
    ctx.lineTo(220,300)
    ctx.stroke()
}
function manLeftFoot()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,260)
    ctx.lineTo(100,300)
    ctx.stroke()
}
function rope()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,85)
    ctx.lineTo(160,35)
    ctx.stroke()
}
function wood1()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(160,35)
    ctx.lineTo(280,35)
    ctx.stroke()
}
function wood2()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(280,35)
    ctx.lineTo(280,340)
    ctx.stroke()
}
function floor()
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(320,340)
    ctx.lineTo(240,340)
    ctx.stroke()
}
var Wrong = 0
function hangmanAnimation(wrong, Score)
{
    var canvas =  document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,380,380)
    ctx.font = "25px Arial";
    ctx.fillText("Score: "+Score, 145, 20);
    if(wrong == 1)
    {
        manHead("happy")
    }
    if(wrong == 2)
    {
        manHead("happy")
        manBody()
    }
    if(wrong == 3)
    {
        manHead("happy")
        manBody()
        manRightArm()
    }
    if(wrong == 4)
    {
        manHead("happy")
        manBody()
        manRightArm()
        manLeftArm()
    }
    if(wrong == 5)
    {
        manHead("normal")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
    }
    if(wrong == 6)
    {
        manHead("normal")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
        manLeftFoot()
    }
    if(wrong == 7)
    {
        manHead("sad")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
        manLeftFoot()
        rope()
    }
    if(wrong == 8)
    {
        manHead("sad")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
        manLeftFoot()
        rope()
        wood1()
    }
    if(wrong == 9)
    {
        manHead("sad")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
        manLeftFoot()
        rope()
        wood1()
        wood2()
    }
    if(wrong == 10)
    {
        manHead("sad")
        manBody()
        manRightArm()
        manLeftArm()
        manRightFoot()
        manLeftFoot()
        rope()
        wood1()
        wood2()
        floor()
        gameOver()
    }
}
function onloadContent()
{
    var start = document.getElementById("start")
    start.style.display = "none"
    hangmanAnimation(Wrong,score)
    Keyboard()
}
onloadContent()
