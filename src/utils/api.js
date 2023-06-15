import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"


const params = {
    key:'AIzaSyCMJQSHsusazkocvBKCGB_J12xPAPhWYxA',
    cx:'87e657caea1e246e1'
}

export const fetchDataFromApi = async (payload) => {

    const {data} = await axios.get(BASE_URL , {
        params: {...params , ...payload}
    })

    return data;

};
