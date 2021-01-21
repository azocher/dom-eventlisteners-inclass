window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Page has loaded!")
    
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault()
        
        // get user inputed value from text input
        let textInput = document.querySelector("input[type='text']").value
        console.log(textInput)
        // get user inputed value from color field
        let colorInput = document.querySelector("input[type='color']").value
        console.log(colorInput)
        // get user inputed value from password
        let passwordInput = document.querySelector("input[type='password']").value
        console.log(passwordInput)

        // send user input results to inner text of div id="answer"
        document.getElementById("answer").innerHTML = textInput + colorInput + passwordInput
    })
})

