const container = document.getElementById('main-container');
document.getElementById('noButton').addEventListener('mouseover', function() {
  const noButton = this;

  // Calcula as novas posições x e y para o botão. Considera o tamanho do botão para evitar que parte dele fique fora do contêiner.
  let newX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
  let newY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

  // Aplica as novas posições ao botão
  noButton.style.position = 'relative'; // Certifique-se de que o contêiner tenha posição relativa se o botão for absoluto.
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
});


document.getElementById('yesButton').addEventListener('click', function() {
  var mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
        <h2>Ótimo! Onde gostaria de ir?</h2>
        <form id="placesForm" style="margin: 20px;">
            <input type="checkbox" name="place" value="BluFoodPark"> BluFoodPark<br>
            <input type="checkbox" name="place" value="Poke Beach"> Poke Beach<br>
            <input type="checkbox" name="place" value="Mahai"> Mahai<br>
            <input type="checkbox" name="place" value="Cinema"> Cinema<br>
            <input style="margin-bottom
:20px;" type="checkbox" name="place" value="Bontà Forno e Cucina"> Bontà Forno e Cucina<br>

            
            <input type="text" name="customPlace" placeholder="Aceito sugestões"><br>

            
            <input style="margin:20px" type="date" name="date" required><br>
            <button type="submit" class="form-item">Enviar</button>

        </form>
    `;

  document.getElementById('placesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = 'confirmacao.html'; // Redireciona para a página de confirmação
  });

});
