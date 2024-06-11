document.getElementById("menu-bar-btn").addEventListener("click", () => {
    const menuBar = document.getElementsByClassName("menu-container")[0];
    console.log();
    if ([...menuBar.classList].includes('shown')) {
        return menuBar.classList.remove("shown");
    }
    menuBar.classList.add("shown");
})

document.getElementById("subscribe-form").addEventListener("submit", e => {
    e.preventDefault();
    const email = e.target.email.value
    const result = document.getElementById("subscribe-result")
    result.innerHTML = "";
    if (email) {
        result.innerHTML = "<span class='success'>Congratulations! You have subscribed succesfully</span>";
    } else {
        result.innerHTML = "<span class='error'>Email can't be blank</span>";
    }
})