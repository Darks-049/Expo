function buscarMago() {
    var nomeDaCarta = document.getElementById("cartaInput").value;
    fetch(`https://place.dog/300/200 ${nomeDoMago}`)
      .then(response => response.json())
      .then(data => mostrarMago(data))
      .catch(error => console.error('Erro:', error));
  }
  
  function mostrarMago(data) {
    var cartasContainer = document.getElementById("cartasContainer");
    cartasContainer.innerHTML = "";
  
    if (data.data.length === 0) {
      cartasContainer.innerHTML = "<p>Nenhuma carta encontrada.</p>";
      return;
    }
  
    data.data.forEach(carta => {
      var cartaDiv = document.createElement("div");
      cartaDiv.classList.add("carta");
  
      var imagem = document.createElement("img");
      imagem.src = carta.images.small;
      imagem.alt = carta.name;
  
      cartaDiv.appendChild(imagem);
  
      cartasContainer.appendChild(cartaDiv);
    });
}

