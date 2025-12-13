let themetoggle = document.getElementById('themetoggle')

document.addEventListener('DOMContentLoaded',()=>{
    let theme = localStorage.getItem("theme")
    if(theme === "dark"){
        document.body.classList.add('dark')
    }

})

themetoggle.addEventListener('change',()=>{
    //change looks for any change in the input value. 
    document.body.classList.toggle('dark')
    let p = document.body.classList.value
    localStorage.setItem("theme",p)
})