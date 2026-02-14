// *** BURAYI DÜZENLE ***
// İlişkinizin başlangıç tarihini buraya yaz (Yıl, Ay-1, Gün)
const startDate = new Date(2024, 6, 29); // 29 Temmuz 2024 (Ay 0-indexed: Temmuz = 6)

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
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.item-wrapper').forEach(item => {
    observer.observe(item);
});

// FINAL PLATE ANIMASYONU
const plateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

const finalPlate = document.querySelector('.final-plate');
if (finalPlate) {
    plateObserver.observe(finalPlate);
}

