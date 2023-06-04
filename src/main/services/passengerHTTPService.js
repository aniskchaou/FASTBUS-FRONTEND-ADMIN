import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllPassenger = () => {
    return http.get(`${BASE_URL}/api/passenger`)
}
const getAllPassengerByDate = () => {
    return http.get(`${BASE_URL}/api/passengerbydate`)
}
const createPassenger = data => {
    return http.post(`${BASE_URL}/api/passenger`, data);
};

const editPassenger = (id, data) => {
    return http.put(`${BASE_URL}/api/passenger/${id}`, data);
};

const removePassenger = id => {
    return http.delete(`${BASE_URL}/api/passenger/${id}`);
};

const getCountPassenger = () => {
    return http.get(`${BASE_URL}/api/count/passenger`)
}

export default {
    getAllPassenger,
    createPassenger,
    editPassenger,
    removePassenger,
    getAllPassengerByDate,
    getCountPassenger
};