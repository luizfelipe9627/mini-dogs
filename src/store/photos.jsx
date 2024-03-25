import createAsyncSlice from "./helper/createAsyncSlice";

// Criado uma constante chamada photos que recebe o retorno da função createAsyncSlice, que recebe um objeto contendo as configurações padrões do slice que quando passado para a função createAsyncSlice, retorna um novo slice.
const photos = createAsyncSlice({
  name: "photos", // O nome do slice.

  // Está sobrepondo o initialState, que é responsável por definir o estado inicial da store, e está passando um novo objeto.
  initialState: {
    list: [], // A propriedade list é responsável por armazenar as fotos.
    pages: 0, // A propriedade pages é responsável por armazenar o número de páginas.
    infinite: true, // A propriedade infinite é responsável por informar se a aplicação deve ou não carregar mais fotos.
  },

  // Está acrescentando novos reducers ao createAsyncSlice, que é responsável por criar os reducers do slice.
  reducers: {
    // Criado um reducer chamado addPhotos, que recebe como parâmetro o estado da store e a ação, essa função é responsável por adicionar as fotos na propriedade list do estado da store.
    addPhotos(state, action) {
      state.list.push(...action.payload); // Está acessando a propriedade list do estado da store e adicionando as fotos que foram retornadas pela payload através do método push, e o spread operator está sendo utilizado para adicionar as fotos uma a uma no array.
      state.pages++; // Está acessando a propriedade pages do estado da store e incrementando em 1.

      // Se o tamanho da payload for igual a 0, executa o bloco de código do if.
      if (action.payload.length === 0) {
        state.infinite = false; // Se o tamanho da payload for igual a 0, ou seja não existir mais fotos, a propriedade infinite do estado da store recebe false.
      }
    },

    // Criado um reducer chamado removePhotos, que recebe como parâmetro o estado da store, essa função é responsável por remover as fotos do estado da store.
    removePhotos(state) {
      state.pages = 0; // Está acessando a propriedade pages do estado da store e atribuindo o valor 0.
      state.infinite = true; // Está acessando a propriedade infinite do estado da store e atribuindo o valor true.
      state.list = []; // Está acessando a propriedade list do estado da store e atribuindo um array vazio.
      state.data = null; // Está acessando a propriedade data do estado da store e atribuindo o valor null.
    },
  },

  // O fetchConfig é uma função responsável por retornar um objeto contendo a url e as opções da requisição, recebe como parâmetro a page que por padrão é 1.
  fetchConfig: (page = 1) => ({
    // A url é responsável por informar a URL da requisição.
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    // As opções são responsáveis por informar as configurações da requisição.
    options: {
      method: "GET", // O método GET é utilizado para solicitar dados de um recurso específico.
      cache: "no-store", // O cache é responsável por armazenar os dados da requisição, e nesse caso está informando que não deve armazenar os dados.
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions; // Está desestruturando a ação addPhotos do slice photos.

export const fetchPhotos = photos.asyncAction; // Exporta a função fetchPhotos que recebe as configurações do slice photos.

// Criado uma função thunk chamada loadNewPhotos, que recebe como parâmetro a page que por padrão é 1 e retorna uma função assíncrona que recebe como parâmetro o dispatch que é responsável por disparar as ações.
export const loadNewPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(fetchPhotos(page)); // Está desestruturando o payload da ação fetchPhotos que é responsável por fazer a requisição das fotos conforme a página passada como parâmetro. O await é responsável por aguardar a requisição ser finalizada.

    dispatch(addPhotos(payload)); // Dispara a ação addPhotos, passando o payload que é uma lista de fotos, fazendo com que as fotos sejam adicionadas ao estado da store.
  };

export default photos.reducer; // Exporta o reducer do slice photos.
