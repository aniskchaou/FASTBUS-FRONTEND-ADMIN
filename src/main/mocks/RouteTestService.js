const _route = [{
    "name": "8Y8Y779T", "start_point": "Paris", "end_point": "SAINT-PAUL",
    "stoppage_points": "Nice", "distance": "12 Km", "approximate_time": "12h",
    "special_seat": "1A", "status": "Active"
}]


const getAll = () => {
    return _route;
};

const get = id => {
    return _route.find(item => item.id === id);
};

const create = (data) => {
    _route.push(data);
};

const update = (old, data) => {

    var foundIndex = _route.findIndex(item => item === old);
    _route[foundIndex] = data;
};

const remove = id => {
    _route.splice(id, 1);
};

const removeAll = () => {

};

const findByTitle = title => {

};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};