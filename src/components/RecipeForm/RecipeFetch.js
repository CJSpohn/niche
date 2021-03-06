const api = {
  getRecipes: async url => {
    const promise = await fetch(url);
    return promise;
  }
}

export default api;
