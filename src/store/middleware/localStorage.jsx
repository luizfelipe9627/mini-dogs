// Criado um middleware para salvar o estado da aplicação no localStorage, que recebe três parâmetros, sendo store que é o estado atual da aplicação, next que é a função que chama o próximo middleware e action que é a ação que foi disparada. O middleware chama a função next passando a ação como parâmetro e em seguida salva o estado da aplicação no localStorage.
const localStorage = (store) => (next) => (action) => {
  const response = next(action); // Criado uma constante chamada response, que recebe a função next, que é responsável por chamar o próximo middleware, e passa como parâmetro a ação que será executada.

  const { meta } = action; // Está desestruturando a propriedade meta da ação, que é responsável por guardar informações adicionais, no caso o token da requisição.

  // Se a propriedade meta e o localStorage dentro de meta existir, então executa o console.log.
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage; // Está desestruturando a chave e o valor do localStorage que está dentro da propriedade meta.

    window.localStorage.setItem(key, JSON.stringify(value)); // Está salvando a chave e o valor(o token) como string no localStorage do navegador.
  }

  return response; // Retorna o resultado da função next, que é a ação que está sendo utilizada para alterar o estado da store.
};

export default localStorage; // Exporta a função localStorage por padrão.
