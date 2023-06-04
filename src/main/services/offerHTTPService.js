import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllOffer = () => {
    return http.get(`${BASE_URL}/api/offer`)
}
const getAllOfferByDate = () => {
    return http.get(`${BASE_URL}/api/offerbydate`)
}
const createOffer = data => {
    return http.post(`${BASE_URL}/api/offer`, data);
};

const editOffer = (id, data) => {
    return http.put(`${BASE_URL}/api/offer/${id}`, data);
};

const removeOffer = id => {
    return http.delete(`${BASE_URL}/api/offer/${id}`);
};

const getCountOffer = () => {
    return http.get(`${BASE_URL}/api/count/offer`)
}

export default {
    getAllOffer,
    createOffer,
    editOffer,
    removeOffer,
    getAllOfferByDate,
    getCountOffer
};