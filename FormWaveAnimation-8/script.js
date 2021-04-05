const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerHTML
        .split("")
        .map(
            (letter, i) =>
                `<span style="transition-delay: ${i * 20}ms">${letter}</span>`
        )
        .join("");
});
