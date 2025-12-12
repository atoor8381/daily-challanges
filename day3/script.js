let buttons = document.querySelectorAll('button')
let paragraphs = document.querySelectorAll('p')
let heartcounts = 0;

class div {
    count = 0;
    constructor(button,para){
        this.button = button
        this.para = para 
    }
}

console.log(buttons)
buttons.forEach((btn,btns)=>{
    let obj =  new div(btn, btn.nextSibling)
    btn.addEventListener('click',()=>{
    obj.para.textContent = obj.count++;
    console.log(obj.count)
    console.log(obj.para)
    })
}
)