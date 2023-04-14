//display input type document

const display = document.querySelector(".display");

//buttons document
const buttons = document.querySelectorAll(".button");

//Button
buttons[0].addEventListener("click",function(){
    display.value += "1";
})

buttons[1].addEventListener("click", function(){
    display.value += "2";
})

buttons[2].addEventListener("click", function(){
    display.value += "3";
})

buttons[3].addEventListener("click", function(){
    display.value += "4";
})

buttons[4].addEventListener("click", function(){
    display.value += "5";
})

buttons[5].addEventListener("click", function(){
    display.value += "6";
})

buttons[6].addEventListener("click", function(){
    display.value += "7";
})
buttons[7].addEventListener("click", function(){
    display.value += "8";
})
buttons[8].addEventListener("click", function(){
    display.value += "9";
})
buttons[9].addEventListener("click", function(){
    display.value += "0";
})
buttons[10].addEventListener("click", function(){
    display.value += "+";
})

buttons[11].addEventListener("click", function(){
    display.value += "-";
})

buttons[12].addEventListener("click", function(){
    display.value += "/";
})

buttons[13].addEventListener("click", function(){
    display.value += "*";
})

buttons[14].addEventListener("click", function(){
    display.value = "";
})
buttons[15].addEventListener("click", function(){
    display.value += ".";
})

buttons[16].addEventListener("click", function(){
    display.value = eval(display.value);
})



buttons[17].addEventListener("click", function(){
    display.value += "00";
})



//keyboard number function
document.addEventListener("keydown", function(e){
    switch(e.key){
        case "1":
            display.value += "1";
            break;
            case "1":
            display.value += "1";
            break;
            case "2":
            display.value += "2";
            break;
            case "3":
            display.value += "3";
            break;
            case "4":
            display.value += "4";
            break;
            case "5":
            display.value += "5";
            break;
            case "6":
            display.value += "6";
            break;
            case "7":
            display.value += "7";
            break;
            case "8":
            display.value += "8";
            break;
            case "9":
            display.value += "9";
            break;
            case "0":
            display.value += "0";
            break;
            case "+":
            display.value += "+";
            break;
            case "-":
            display.value += "-";
            break;
            case "/":
            display.value += "/";
            break;
            case "*":
            display.value += "*";
            break;
            case "Backspace":
            display.value = "";
            break;
            case "Delete":
            display.value = "";
            break;
            case ".":
            display.value += ".";
            break;
           case "=":
            display.value =eval(display.value)
            break;
            case "Enter":
            display.value =eval(display.value)
            break;
            case "00":
            display.value += "00";
            break;
    }
})