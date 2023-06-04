import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllTravel = () => {
    return http.get(`${BASE_URL}/api/travel`)
}
const getAllTravelByDate = () => {
    return http.get(`${BASE_URL}/api/travelbydate`)
}
const createTravel = data => {
    return http.post(`${BASE_URL}/api/travel`, data);
};

const editTravel = (id, data) => {
    return http.put(`${BASE_URL}/api/travel/${id}`, data);
};

const removeTravel = id => {
    return http.delete(`${BASE_URL}/api/travel/${id}`);
};

const getCountTravel = () => {
    return http.get(`${BASE_URL}/api/count/travel`)
}

export default {
    getAllTravel,
    createTravel,
    editTravel,
    removeTravel,
    getAllTravelByDate,
    getCountTravel
};