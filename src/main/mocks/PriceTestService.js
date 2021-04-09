const _price = [{ "route_id": "532F23", "vehicle_type_id": "bus", "price": "452 $", "childere_price": "5 $", "special_price": "8 $" }]

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