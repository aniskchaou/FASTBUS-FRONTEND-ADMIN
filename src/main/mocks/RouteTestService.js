const _route = []

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