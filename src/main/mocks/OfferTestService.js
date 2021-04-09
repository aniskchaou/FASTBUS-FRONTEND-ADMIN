const _offer = [{
    "offer_name": "3EE32E2", "offer_start_date": "22/10/2020", "offer_end_date": "22/10/2020",
    "offer_code": "13E2", "offer_discount": "20%", "offer_name": "REZÉ"
}]

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