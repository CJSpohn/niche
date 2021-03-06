const api = {
  getRecipes: (url) => {
    const promise = fetch(url);
    return promise;
  }
}
