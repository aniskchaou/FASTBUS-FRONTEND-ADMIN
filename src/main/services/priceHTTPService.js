import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllPrice = () => {
    return http.get(`${BASE_URL}/api/price`)
}
const getAllPriceByDate = () => {
    return http.get(`${BASE_URL}/api/pricebydate`)
}
const createPrice = data => {
    return http.post(`${BASE_URL}/api/price`, data);
};

const editPrice = (id, data) => {
    return http.put(`${BASE_URL}/api/price/${id}`, data);
};

const removePrice = id => {
    return http.delete(`${BASE_URL}/api/price/${id}`);
};

const getCountPrice = () => {
    return http.get(`${BASE_URL}/api/count/price`)
}

export default {
    getAllPrice,
    createPrice,
    editPrice,
    removePrice,
    getAllPriceByDate,
    getCountPrice
};