const themeSelector = document.querySelector("#dark");

function changeTheme() {
 console.log(themeSelector)   
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");

        document.querySelector(".logo").src ="white-logo.png"; // Change 'white-logo.png' to your white logo source
    } else {
        document.body.classList.remove("dark");

        document.querySelector(".logo").src = "blue-logo.png"; // Change 'blue-logo.png' to your blue logo source
    }
}
themeSelector.addEventListener("change", changeTheme);
changeTheme()