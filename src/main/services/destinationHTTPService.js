import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllDestination = () => {
    return http.get(`${BASE_URL}/api/destination`)
}
const getAllDestinationByDate = () => {
    return http.get(`${BASE_URL}/api/destinationbydate`)
}
const createDestination = data => {
    return http.post(`${BASE_URL}/api/destination`, data);
};

const editDestination = (id, data) => {
    return http.put(`${BASE_URL}/api/destination/${id}`, data);
};

const removeDestination = id => {
    return http.delete(`${BASE_URL}/api/destination/${id}`);
};

const getCountDestination = () => {
    return http.get(`${BASE_URL}/api/count/destination`)
}

export default {
    getAllDestination,
    createDestination,
    editDestination,
    removeDestination,
    getAllDestinationByDate,
    getCountDestination
};