import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllFacility = () => {
    return http.get(`${BASE_URL}/api/facility`)
}
const getAllFacilityByDate = () => {
    return http.get(`${BASE_URL}/api/facilitybydate`)
}
const createFacility = data => {
    return http.post(`${BASE_URL}/api/facility`, data);
};

const editFacility = (id, data) => {
    return http.put(`${BASE_URL}/api/facility/${id}`, data);
};

const removeFacility = id => {
    return http.delete(`${BASE_URL}/api/facility/${id}`);
};

const getCountFacility = () => {
    return http.get(`${BASE_URL}/api/count/facility`)
}

export default {
    getAllFacility,
    createFacility,
    editFacility,
    removeFacility,
    getAllFacilityByDate,
    getCountFacility
};