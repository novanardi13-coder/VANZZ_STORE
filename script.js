// Dark mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Form ke WhatsApp
document.getElementById("orderForm").onsubmit = function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let game = document.getElementById("game").value;
  let idgame = document.getElementById("idgame").value;

  let pesan = `Halo Vanzz Store%0ANama: ${nama}%0AGame: ${game}%0AID Game: ${idgame}`;
  let wa = `https://wa.me/6280000000000?text=${pesan}`;

  window.open(wa, "_blank");
};