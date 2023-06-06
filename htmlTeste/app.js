const $toggle_button = document.getElementById("toggle-button");
const $html = document.querySelector("html");

$toggle_button.addEventListener("click", () => {
    $html.classList.toggle("dark-mode");
});
