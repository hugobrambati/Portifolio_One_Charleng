// Função para validar email
function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para validar o formulário
function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var fone = document.getElementById('fone').value;
  var mensagem = document.getElementById('txtMensagem').value;

  // Validação do nome
  if (!nome) {
      alert('Por favor, preencha o campo de nome.');
      return false;
  }

  // Validação do email
  if (!email || !validarEmail(email)) {
      alert('Por favor, insira um email válido.');
      return false;
  }

  // Validação do celular
  if (!fone) {
      alert('Por favor, preencha o campo de celular.');
      return false;
  }

  // Validação da mensagem
  if (!mensagem) {
      alert('Por favor, preencha o campo de mensagem.');
      return false;
  }

  return true;
}

// Adicionar evento ao formulário para validar antes de enviar
document.getElementById('form').onsubmit = function(event) {
  if (!validarFormulario()) {
      event.preventDefault(); // Impede o envio do formulário se a validação falhar
  }
};

