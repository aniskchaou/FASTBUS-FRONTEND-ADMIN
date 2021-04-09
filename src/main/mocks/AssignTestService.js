const _assign = [{
    "trip": "3EE3",
    "fleet_registration_id": "223S2",
    "assign_date": "12/5/2020",
    "driver_id": "RILLIEUX-LA-PAPE",
    "status": "Active"
}]


const getAll = () => {
    return _assign;
};

const get = id => {
    return _assign.find(item => item.id === id);
};

const create = (data) => {
    _assign.push(data);
};

const update = (old, data) => {

    var foundIndex = _assign.findIndex(item => item === old);
    _assign[foundIndex] = data;
};

const remove = id => {
    _assign.splice(id, 1);
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