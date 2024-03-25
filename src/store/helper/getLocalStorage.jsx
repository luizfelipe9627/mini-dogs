// Criado uma função chamada getLocalStorage que recebe a chave e o valor inicial como parâmetro, responsável por obter o valor do localStorage.
function getLocalStorage(key, initial) {
  // O try é responsável por tentar executar o código, e caso ocorra algum erro, ele é capturado pelo catch.
  try {
    return JSON.parse(window.localStorage.getItem(key)); // Retorna o valor do localStorage da chave passada como parâmetro, e transforma a string em um objeto novamente.
  } catch (error) {
    return initial; // Retorna o valor inicial.
  }
}

export default getLocalStorage; // Exporta a função getLocalStorage por padrão.
