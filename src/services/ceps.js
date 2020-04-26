import axios from "axios";

export const searchAddress = cep => {
  const url = `http://cep.la/${cep}`;
  return axios.get(url, { headers: { Accept: "application/json" } });
  // const url = `http://viacep.com.br/ws/${cep}/json`;
  // return axios.get(url);
};
