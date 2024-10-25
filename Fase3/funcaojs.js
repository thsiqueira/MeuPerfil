// Array de fotos
const photos = ["euperfil1.jpg", "euperfil2.jpg", "euperfil3.jpg", "euperfil4.jpg"];
let currentPhotoIndex = 0;

// Função para trocar a foto para a próxima
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById("profilePhoto").src = photos[currentPhotoIndex];
}

// Função para trocar a foto para a anterior
function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    document.getElementById("profilePhoto").src = photos[currentPhotoIndex];
}

// Função para abrir e fechar cada tópico
function toggleContent(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling.querySelector('button');

    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "&#9650;"; // Seta para cima
    } else {
        content.style.display = "none";
        button.innerHTML = "&#9660;"; // Seta para baixo
    }
}
