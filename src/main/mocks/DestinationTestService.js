const _destination = []

const getAll = () => {
    return _destination;
};

const get = id => {
    return _destination.find(item => item.id === id);
};

const create = (data) => {
    _destination.push(data);
};

const update = (old, data) => {

    var foundIndex = _destination.findIndex(item => item === old);
    _destination[foundIndex] = data;
};

const remove = id => {
    _destination.splice(id, 1);
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