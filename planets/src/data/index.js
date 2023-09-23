const axios = require('axios');

const url_db = "http://data:4004/Planet"

module.exports = {
  list: async () => {
    const { data } = await axios.get(url_db);
    return data.data;
  },

  create: async (planet) => {
    const { data } = await axios.post(url_db, planet);
    return data.data;
  },

  getOne: async (id) => {
    const { data } = await axios.get(`${url_db}/${id}`);
    return data.data;
  },

  remove: async (id) => {
    const { data } = await axios.delete(`${url_db}/${id}`);
    return data.data;
  },
}