import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GCsG0yOG3rE9M-rn2h88IZy6VWNf0WzxBp3mYfs8JPs",
  },
});
