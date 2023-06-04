import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllVehicule = () => {
    return http.get(`${BASE_URL}/api/vehicule`)
}
const getAllVehiculeByDate = () => {
    return http.get(`${BASE_URL}/api/destinationbydate`)
}
const createVehicule = data => {
    return http.post(`${BASE_URL}/api/vehicule`, data);
};

const editVehicule = (id, data) => {
    return http.put(`${BASE_URL}/api/vehicule/${id}`, data);
};

const removeVehicule = id => {
    return http.delete(`${BASE_URL}/api/vehicule/${id}`);
};

const getCountVehicule = () => {
    return http.get(`${BASE_URL}/api/count/vehicule`)
}

export default {
    getAllVehicule,
    createVehicule,
    editVehicule,
    removeVehicule,
    getAllVehiculeByDate,
    getCountVehicule
};