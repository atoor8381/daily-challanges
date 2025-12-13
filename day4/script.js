let themetoggle = document.getElementById('themetoggle')

themetoggle.addEventListener('change',()=>{
    //change looks for any change in the input value. 
    document.body.classList.toggle('dark')
})