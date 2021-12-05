let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let equation='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'C')
        {
            equation = '';
            screen.value = equation;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(equation);
            equation = '';   
        }
        else{
            equation += buttonText;
            screen.value = equation;
        }
    })
}
