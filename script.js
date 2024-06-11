// mobile menu bar toggling

document.getElementById("menu-bar-btn").addEventListener("click", () => {
    const menuBar = document.getElementsByClassName("menu-container")[0];
    console.log();
    if ([...menuBar.classList].includes('shown')) {
        return menuBar.classList.remove("shown");
    }
    menuBar.classList.add("shown");
});

// see more popular items functionalities
const seeMoreBtn = document.getElementById("see-more-btn");
seeMoreBtn.addEventListener("click", () => {
    const seeMoreContainer = document.getElementById("more-items-container");
    if ([...seeMoreContainer.classList].includes('hidden')) {
        seeMoreBtn.querySelector(".more-less").innerHTML = "Less"
        seeMoreBtn.querySelector("i").style.transform = "rotate(180deg)"
        return seeMoreContainer.classList.remove("hidden");
    }
    seeMoreBtn.querySelector(".more-less").innerHTML = "More"
    seeMoreBtn.querySelector("i").style.transform = "rotate(0deg)"
    seeMoreContainer.classList.add("hidden");
});

// subscription functionalities
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
});