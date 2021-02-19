const _offer = []

const getAll = () => {
    return _offer;
};

const get = id => {
    return _offer.find(item => item.id === id);
};

const create = (data) => {
    _offer.push(data);
};

const update = (old, data) => {

    var foundIndex = _offer.findIndex(item => item === old);
    _offer[foundIndex] = data;
};

const remove = id => {
    _offer.splice(id, 1);
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