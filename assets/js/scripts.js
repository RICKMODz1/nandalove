let index = 0;
        const photos = document.querySelectorAll(".photo");
        function showPhoto(i) {
            photos.forEach(photo => photo.classList.remove("active"));
            photos[i].classList.add("active");
        }
        function prevPhoto() {
            index = (index - 1 + photos.length) % photos.length;
            showPhoto(index);
        }
        function nextPhoto() {
            index = (index + 1) % photos.length;
            showPhoto(index);
        }
        setInterval(nextPhoto, 3000);

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.querySelector(".hearts").appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);

        let startDate = new Date("December 09, 2024").getTime();
        function updateCounter() {
            let now = new Date().getTime();
            let diff = Math.abs(now - startDate) / 1000;

            let years = Math.floor(diff / (365 * 24 * 60 * 60));
            let months = Math.floor((diff % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
            let days = Math.floor((diff % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
            let hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
            let minutes = Math.floor((diff % (60 * 60)) / 60);
            let seconds = Math.floor(diff % 60);

            document.getElementById("years").textContent = String(years).padStart(2, '0');
            document.getElementById("months").textContent = String(months).padStart(2, '0');
            document.getElementById("days").textContent = String(days).padStart(2, '0');
            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        }

        setInterval(updateCounter, 1000);
        
        document.addEventListener("DOMContentLoaded", function () {
            let audio = document.getElementById("bg-music");
        
            if (!sessionStorage.getItem("audioStarted")) {
                audio.play().catch(error => console.log("Erro ao tocar a música:", error));
                sessionStorage.setItem("audioStarted", "true");
            }
        });