onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
  // Defina o tempo de delay em milissegundos (por exemplo, 3000 ms = 3 segundos)
  setTimeout(function() {
    document.getElementById("surprise-button").classList.add("show");
  }, 3500);
  
  // Ação do botão
  document.getElementById("surprise-button").addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Erro ao tocar a música:", error));

    setTimeout(() => {
      window.location.assign ("love_counter.html", "_blank");
    }, 500);
  });
});