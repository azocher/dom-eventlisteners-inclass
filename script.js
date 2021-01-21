window.addEventListener('DOMContentLoaded', (event) => {
    
    // add a click event listener for button
    document.querySelector("button").addEventListener("click", () => {
        // update Div inner text to Bonjour!
        document.querySelector("div").innerText = "Bonjour!"
    })
    
})

