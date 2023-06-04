import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllSeat = () => {
    return http.get(`${BASE_URL}/api/seat`)
}
const getAllSeatByDate = () => {
    return http.get(`${BASE_URL}/api/seatbydate`)
}
const createSeat = data => {
    return http.post(`${BASE_URL}/api/seat`, data);
};

const editSeat = (id, data) => {
    return http.put(`${BASE_URL}/api/seat/${id}`, data);
};

const removeSeat = id => {
    return http.delete(`${BASE_URL}/api/seat/${id}`);
};

const getCountSeat = () => {
    return http.get(`${BASE_URL}/api/count/seat`)
}

export default {
    getAllSeat,
    createSeat,
    editSeat,
    removeSeat,
    getAllSeatByDate,
    getCountSeat
};