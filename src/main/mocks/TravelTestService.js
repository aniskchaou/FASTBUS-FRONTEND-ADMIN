const _travel = [{ "trip_title": "COLOMIERS - PUTEAUX", "route": "32E32", "weekend": "07/11/2020", "schedule": "12h00" }]

const getAll = () => {
    return _travel;
};

const get = id => {
    return _travel.find(item => item.id === id);
};

const create = (data) => {
    _travel.push(data);
};

const update = (old, data) => {

    var foundIndex = _travel.findIndex(item => item === old);
    _travel[foundIndex] = data;
};

const remove = id => {
    _travel.splice(id, 1);
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