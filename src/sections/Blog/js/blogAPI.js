import axios from 'axios';

export default {
  getPosts: async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          timeout: 10000,
        }
      );
      return data;
    } catch (err) {
      console.log(`ERROR: blogAPI.js - getPosts(): ${err.stack}`);
    }
  },
};
