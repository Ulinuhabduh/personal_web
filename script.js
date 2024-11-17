const cards = document.querySelectorAll('.portfolio-cards .card'); 
let currentIndex = 0; 

function slide(direction) {
    const currentCard = cards[currentIndex];

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % cards.length; 
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
    }

    const nextCard = cards[currentIndex];

    currentCard.classList.add('smooth-slide-out');
    currentCard.classList.remove('card-active');

    nextCard.classList.add('smooth-slide-in', 'card-active');
    nextCard.classList.remove('smooth-slide-out');

    setTimeout(() => {
        currentCard.classList.remove('smooth-slide-out');
        nextCard.classList.remove('smooth-slide-in');
    }, 600);
}

// Inisialisasi: tampilkan hanya kartu pertama
cards.forEach((card, index) => {
    if (index === 0) {
        card.classList.add('card-active');
    } else {
        card.classList.remove('card-active');
    }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzxnLsRPY3eOzYGLlQjFFA-2CIy2EKih1VLR7xc5ytHUyueCZMm0LuIdJH0iu1CADYu_Q/exec';
const form = document.forms['submit-to-google-sheet'];
const alertBox = document.getElementById('alert-box');
const alertMessage = document.getElementById('alert-message');

function showAlert(message, success = true) {
    alertBox.style.backgroundColor = success ? '#4CAF50' : '#f44336';
    alertMessage.textContent = message; 
    alertBox.classList.remove('hidden'); 
    alertBox.style.display = 'block';
}

// Fungsi untuk menutup alert
function closeAlert() {
    alertBox.classList.add('hidden'); 
    alertBox.style.display = 'none';
}

// Event listener untuk submit
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            showAlert('Form successfully submitted!'); 
            form.reset(); 
        })
        .catch(error => {
            showAlert('An error occurred. Please try again.', false); 
        });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Tambah/hapus kelas 'active'
}
