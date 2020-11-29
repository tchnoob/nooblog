import axios from "axios";

class Repository {
  static getPostMetaByTag(tag) {
    return axios.get(`/post/tag/${tag}`);
  }
  static getRecentPost(n) {
    return axios.get(`/post/recent/${n}`);
  }
  static getPostById(id) {
    return axios.get(`/post/id/${id}`);
  }
}

export default Repository;
