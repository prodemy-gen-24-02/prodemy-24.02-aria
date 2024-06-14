import axios, { Axios } from 'axios'

async function axiosFetch(link){
    return await axios.get(link).then((response)=>response.data).catch((error)=>console.log("error", error));
  };

  export default axiosFetch