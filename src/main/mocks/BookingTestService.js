const _booking = [{
    "approximate_time": "23 / 5 / 2020",
    "name": "Raymond Rhéaume",
    "route_id": "3322D23D",
    "price": "12$",
    "status": "Payé"
}]

const getAll = () => {
    return _booking;
};

const get = id => {
    return _booking.find(item => item.id === id);
};

const create = (data) => {
    _booking.push(data);
};

const update = (old, data) => {

    var foundIndex = _booking.findIndex(item => item === old);
    _booking[foundIndex] = data;
};

const remove = id => {
    _booking.splice(id, 1);
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