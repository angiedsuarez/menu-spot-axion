const url = "https://script.google.com/macros/s/AKfycbyAlR1sdIP0PXRdg73hdkwZB1AKY8z_nVkKXVEzzPqlUiEsDMGxgNSC655Pq4Bp1xgQ/exec";

fetch(url)
  .then(res => res.json())
  .then(datos => {

    // Quitar mensajes de carga
    document.querySelectorAll(".loading").forEach(elemento => {
      elemento.remove();
    });

    datos.forEach(item => {

      const contenedor = document.getElementById(`${item.categoria}-items`);

      if (!contenedor) return;

      contenedor.innerHTML += `
        <div class="menu-item">
          <div class="item-line">
            <span class="item-name">${item.producto}</span>
            <span class="dots"></span>
            <span class="price">$${Number(item.precio).toLocaleString("es-AR")}</span>
          </div>
        </div>
      `;

    });

  })
  .catch(error => {

    console.log("Error:", error);

    document.querySelectorAll(".items").forEach(contenedor => {
      contenedor.innerHTML = `
        <p class="loading">
          No pudimos cargar el menú.<br>
          Intentá nuevamente en unos segundos.
        </p>
      `;
    });

  });