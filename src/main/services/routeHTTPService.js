import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllRoute = () => {
    return http.get(`${BASE_URL}/api/route`)
}
const getAllRouteByDate = () => {
    return http.get(`${BASE_URL}/api/routebydate`)
}
const createRoute = data => {
    return http.post(`${BASE_URL}/api/route`, data);
};

const editRoute = (id, data) => {
    return http.put(`${BASE_URL}/api/route/${id}`, data);
};

const removeRoute = id => {
    return http.delete(`${BASE_URL}/api/route/${id}`);
};

const getCountRoute = () => {
    return http.get(`${BASE_URL}/api/count/route`)
}

export default {
    getAllRoute,
    createRoute,
    editRoute,
    removeRoute,
    getAllRouteByDate,
    getCountRoute
};