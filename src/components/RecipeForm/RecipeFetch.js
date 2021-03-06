const api = {
  getRecipes: async url => {
    console.log(url)
    const promise = await fetch(url);
    return promise;
  }
}

export default api;
