// const display = document.getElementsByClassName("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function cleardisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value=eval(display.value);
//     }
//     catch(error){
//         display.value="Error";
//     }
// }


let string= "";
let buttons = document.querySelectorAll('.button');
let evaluated = false;
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            try{
                string = eval(string);
                document.querySelector('input').value = string;
                evaluated = true;
            }
            catch(error){
                string="Errro! Equation is incomplete"
                document.querySelector('input').value = string;
                evaluated =true
            }
        }
        else if(e.target.innerHTML == 'C' ){
            string = " ";
            document.querySelector('input').value = string;
            evaluated =false;
        }
        else if (e.target.innerHTML == 'sqrt') {
            if (evaluated){
                string ='';
                document.querySelector('input').value =string;
                evaluated = false
            }
            string = Math.sqrt(eval(string)).toString();
            document.querySelector('input').value = string;
            evaluated = true;
        } 
        else{
            if (evaluated){
                string ="";
                evaluated = false;
            }
            console.log(e.string)
            string =string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})