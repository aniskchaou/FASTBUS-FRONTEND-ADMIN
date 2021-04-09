const _passanger = [{
    "id": 1, "firstname": "Yves Courtois",
    "email": "YvesCourtois@rhyta.com", "address_line_1": "31, Cours Marechal-Joffre 95170"
}]


const getAll = () => {
    return _passanger;
};

const get = id => {
    return _passanger.find(item => item.id === id);
};

const create = (data) => {
    _passanger.push(data);
};

const update = (old, data) => {

    var foundIndex = _passanger.findIndex(item => item === old);
    _passanger[foundIndex] = data;
};

const remove = id => {
    _passanger.splice(id, 1);
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