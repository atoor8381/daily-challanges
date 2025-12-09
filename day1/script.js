let button = document.querySelector('.clicktostart')
let imageheadtail = document.querySelector('.image')
let putresultshere = document.querySelector('.finalwords')



button.addEventListener('click', () => {
    let i = 0;
    let reps = Math.floor(Math.random() * 10 + 1)
    let repetitioninterval = setInterval(() => {
        imageheadtail.classList.toggle('active')
        i++
        if (i === reps) {
            clearInterval(repetitioninterval)
            if(imageheadtail.classList.contains('active')){
                putresultshere.textContent='And heads it is'
            }
            else{
                putresultshere.textContent='it is tails'
            }
        }
    }, 150);
})