const api = {
  getRecipes: async url => {
    const promise = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (promise.ok) {
      return promise
    } else {
      throw "Error"
    }
  }
}

export default api;
