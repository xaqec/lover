    // *** BURAYI DÜZENLE ***
// İlişkinizin başlangıç tarihini buraya yaz (Yıl, Ay-1, Gün)
// Not: Aylar 0'dan başlar (Ocak=0, Şubat=1, ... , Aralık=11)
const startDate = new Date(2023, 1, 14); // Örnek: 14 Şubat 2023

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerHTML =
        `${days} Gün <br> ${hours} Saat <br> ${minutes} Dakika <br> ${seconds} Saniye`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Sayfa yüklenince hemen çalışsın

// ARKA PLAN KALP ANİMASYONU
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');

    // Rastgele pozisyon (ekran genişliğinde)
    heart.style.left = Math.random() * 100 + "vw";

    // Rastgele animasyon süresi (3s ile 8s arası)
    const duration = Math.random() * 5 + 3;
    heart.style.animationDuration = duration + "s";

    // Rastgele boyut (küçük farklar)
    const size = Math.random() * 0.5 + 0.8; // 0.8x - 1.3x
    heart.style.transform = `scale(${size})`;

    // Rastgele şeffaflık
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    document.body.appendChild(heart);

    // Animasyon bitince temizle
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Her 400ms'de bir yeni kalp üret
setInterval(createHeart, 400);
