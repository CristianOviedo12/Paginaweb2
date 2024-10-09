

const btnverMas = document.getElementById("btnVerMas");
const contenidoAdicional = document.getElementById("contenidoAdicional");

btnverMas.addEventListener("click", () => {
    if (contenidoAdicional.classList.contains("novisible")) {
        contenidoAdicional.classList.remove("novisible");
        btnverMas.textContent = "VER MENOS";
    } else {
        contenidoAdicional.classList.add("novisible");
        btnverMas.textContent = "VER MÁS";
    }
});