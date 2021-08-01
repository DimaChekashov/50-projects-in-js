const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Отлично";

ratingsContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Спасибо!</strong>
        <br>
        <strong>Обратная связь: ${selectedRating}</strong>
        <p>Мы будем использовать ваши отзывы, чтобы улучшить нашу службу поддержки.</p>
    `;
});

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
    }
}
