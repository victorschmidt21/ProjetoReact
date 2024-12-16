const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";
async function Request(genre, page, type, order, key, typeRequest) {
  if(typeRequest=="discover") {
    const g = genre === "Todos" ? "" : `with_genres=${genre}`;
      const url = `https://api.themoviedb.org/3/${typeRequest}/${type}?&language=pt-BR&page=${page}&sort_by=${order}&query=${key}&${g}`;

      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      return response;
    }else{
      const url = `https://api.themoviedb.org/3/${typeRequest}/${type}?&language=pt-BR&page=${page}&query=${key}}`;

      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      return response;
    }   
  }

export default Request;
