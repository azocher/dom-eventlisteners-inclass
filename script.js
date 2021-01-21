window.addEventListener('DOMContentLoaded', (event) => {
    
    // #1: Add event listener with AddEventListener()
    // add a click event listener for button
    document.querySelector("button").addEventListener("click", () => {
        // update Div inner text to Bonjour!
        document.querySelector("div").innerText = "Bonjour!"
    })
        
})

