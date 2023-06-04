import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllDriver = () => {
    return http.get(`${BASE_URL}/api/driver`)
}
const getAllDriverByDate = () => {
    return http.get(`${BASE_URL}/api/driverbydate`)
}
const createDriver = data => {
    return http.post(`${BASE_URL}/api/driver`, data);
};

const editDriver = (id, data) => {
    return http.put(`${BASE_URL}/api/driver/${id}`, data);
};

const removeDriver = id => {
    return http.delete(`${BASE_URL}/api/driver/${id}`);
};

const getCountDriver = () => {
    return http.get(`${BASE_URL}/api/count/driver`)
}

export default {
    getAllDriver,
    createDriver,
    editDriver,
    removeDriver,
    getAllDriverByDate,
    getCountDriver
};