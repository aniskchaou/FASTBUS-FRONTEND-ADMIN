import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllAssign = () => {
    return http.get(`${BASE_URL}/api/assignement`)
}
const getAllAssignByDate = () => {
    return http.get(`${BASE_URL}/api/assignementbydate`)
}
const createAssign = data => {
    return http.post(`${BASE_URL}/api/assignement`, data);
};

const editAssign = (id, data) => {
    return http.put(`${BASE_URL}/api/assignement/${id}`, data);
};

const removeAssign = id => {
    return http.delete(`${BASE_URL}/api/assignement/${id}`);
};

const getCountAssign = () => {
    return http.get(`${BASE_URL}/api/count/assignement`)
}

export default {
    getAllAssign,
    createAssign,
    editAssign,
    removeAssign,
    getAllAssignByDate,
    getCountAssign
};