import { api } from "./api";

const token = "d4e0b108e59de39dcb716c47e251eaca";
async function Request(genre, page, type, order, key, typeRequest) {
  if(typeRequest=="discover") {
      const data = await api.get(`discover/${type}`,{
        params: {
          language: 'pt-BR',
          page: page,
          sort_by: order,
          query: key,
          with_genres: genre,
          api_key: token,
        }
      })

      const response = await data.data;
      return response;
    }else{
      const data = await api.get(`search/${type}`,{
        params: {
          api_key: token,
          language: 'pt-BR',
          page: page,
          query: key,
        }
      })
      console.log(data)
      const response = await data.data;
      return response;
    }   
  }

export default Request;
