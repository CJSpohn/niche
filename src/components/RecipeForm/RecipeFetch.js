const api = {
  getRecipes: async url => {
    console.log(url)
    const promise = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return promise;
  }
}

export default api;
