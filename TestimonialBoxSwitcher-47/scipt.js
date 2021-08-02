const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
    {
        name: "Вася Пупкин",
        position: "Петроград",
        photo: "https://randomuser.me/api/portraits/men/46.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Маленькая строчка гор предупреждал все пустился большого страну.",
    },
    {
        name: "Инакентий Петрович",
        position: "Магнитогорск",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Маленькая строчка гор предупреждал все прямо свое коварный вдали текста встретил заголовок!",
    },
    {
        name: "Максим Бородин",
        position: "Москва",
        photo: "https://randomuser.me/api/portraits/men/44.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Маленькая строчка гор предупреждал все пустился большого страну, которой буквоград до курсивных инициал прямо свое коварный вдали текста встретил заголовок!",
    },
    {
        name: "Петр Пушкин",
        position: "Казань",
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
    },
    {
        name: "Александр Петров",
        position: "Кизнер",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Маленькая строчка гор предупреждал все пустился большого страну, которой буквоград до курсивных инициал прямо свое коварный вдали текста встретил заголовок!",
    },
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);
