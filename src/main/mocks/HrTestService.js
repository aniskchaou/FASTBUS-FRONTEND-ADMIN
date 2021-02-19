const _hr = []

const getAll = () => {
    return _hr;
};

const get = id => {
    return _hr.find(item => item.id === id);
};

const create = (data) => {
    _hr.push(data);
};

const update = (old, data) => {

    var foundIndex = _hr.findIndex(item => item === old);
    _hr[foundIndex] = data;
};

const remove = id => {
    _hr.splice(id, 1);
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