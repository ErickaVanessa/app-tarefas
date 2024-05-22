// configuração do button
const chk = document.getElementById("checked");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
