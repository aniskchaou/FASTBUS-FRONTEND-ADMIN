const _price = []

const getAll = () => {
    return _price;
};

const get = id => {
    return _price.find(item => item.id === id);
};

const create = (data) => {
    _price.push(data);
};

const update = (old, data) => {

    var foundIndex = _price.findIndex(item => item === old);
    _price[foundIndex] = data;
};

const remove = id => {
    _price.splice(id, 1);
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