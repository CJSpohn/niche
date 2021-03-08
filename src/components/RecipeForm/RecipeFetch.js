const api = {
  getRecipes: async url => {
    const promise = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (promise.status === 200) {
      return promise
    } else {
      throw new Error("Error")
    }
  }
}

export default api;
