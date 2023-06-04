import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllStation = () => {
    return http.get(`${BASE_URL}/api/station`)
}
const getAllStationByDate = () => {
    return http.get(`${BASE_URL}/api/stationbydate`)
}
const createStation = data => {
    return http.post(`${BASE_URL}/api/station`, data);
};

const editStation = (id, data) => {
    return http.put(`${BASE_URL}/api/station/${id}`, data);
};

const removeStation = id => {
    return http.delete(`${BASE_URL}/api/station/${id}`);
};

const getCountStation = () => {
    return http.get(`${BASE_URL}/api/count/station`)
}

export default {
    getAllStation,
    createStation,
    editStation,
    removeStation,
    getAllStationByDate,
    getCountStation
};