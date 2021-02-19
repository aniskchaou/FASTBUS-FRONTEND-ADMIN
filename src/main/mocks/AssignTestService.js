const _assign = []

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