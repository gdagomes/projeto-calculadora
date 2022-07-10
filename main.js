let buttons = Array.from(document.getElementsByClassName('btn'));
let display = document.querySelector('.display');


console.log(display.innerHTML);

buttons.map( button => {

    button.addEventListener('click', (e)=>{
        switch (e.target.innerHTML) {
            case 'C':
                display.innerHTML = '';
                break;

            case 'Del':
                if(display.innerHTML){
                    display.innerHTML = display.innerHTML.slice(0,-1);
                }
                break;

            case '=':
                display.innerHTML = eval(display.innerHTML);
                break;
        
            default:
                display.innerHTML += e.target.innerHTML;
                break;
        }
    })
})