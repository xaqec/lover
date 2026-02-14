// *** BURAYI DÜZENLE ***
// İlişkinizin başlangıç tarihini buraya yaz (Yıl, Ay-1, Gün)
const startDate = new Date(2023, 1, 14); // Örnek: 14 Şubat 2023

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerHTML =
        `${days} Gün <span>${hours} Saat</span> <span>${minutes} Dakika</span> <span>${seconds} Saniye</span>`;
}

setInterval(updateTimer, 1000);
updateTimer();

// ARKA PLAN KALP ANİMASYONU
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');

    // Rastgele pozisyon
    heart.style.left = Math.random() * 100 + "vw";

    // Rastgele animasyon süresi
    const duration = Math.random() * 5 + 5; // 5s - 10s arası (daha yavaş ve sakin)
    heart.style.animationDuration = duration + "s";

    // Rastgele boyut
    const size = Math.random() * 0.8 + 0.5; // 0.5x - 1.3x
    // Scale dönüşümünü style içinde değil, CSS animasyonunda halletmek daha iyi ama
    // burada başlangıç scale'ini değiştirmek için transform'u manipüle edersek
    // CSS'teki rotate(45deg) kaybolabilir. O yüzden size'ı css variable olarak da verebiliriz
    // Veya transform'u tam yazabiliriz.

    // Basitlik için opacity ile oynuyoruz ve scale'i CSS animasyonuna bırakıyoruz.
    // Ancak varyasyon istiyorsak:
    // heart.style.setProperty('--scale', size); yapıp CSS'te kullanabiliriz.
    // Şimdilik sadece opacity ve duration varyasyonu yeterli.

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300); // Üretim sıklığı

// SCROLL ANIMASYONU (VINE TIMELINE)
const observerOptions = {
    threshold: 0.2 // %20'si görünür olunca tetikle
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Bir kere göründükten sonra observer'dan çıkar (tekrar kaybolmasın)
            // İsteğe bağlı: observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.item-wrapper').forEach(item => {
    observer.observe(item);
});
