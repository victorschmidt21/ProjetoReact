 async function Request(genre, page, type, order) {
    const g = (genre === "Todos" ? "" : `with_genres=${genre}`)
    const url = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=${order}&${g}`;
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";

      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      return response.results;
}

export default Request