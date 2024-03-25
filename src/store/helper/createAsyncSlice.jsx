import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona.
 * @param {Object} config
 * @param {String} config.name - Nome do slice.
 * @param {Object} config.initialState - Estado inicial do slice.
 * @param {Object} config.reducers - Reducers adicionais.
 * @param {Function} config.fetchConfig - Função que retorna a configuração da requisição.
 */

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      data: null,
      loading: false,
      error: null,

      ...config.initialState,
    },
    
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },

      fetchSuccess(state, action) {
        state.data = action.payload;
        state.loading = false; 
        state.error = null;
      },

      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },

      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());

      const { url, options } = config.fetchConfig(payload);

      const response = await fetch(url, options);

      const data = await response.json();

      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
