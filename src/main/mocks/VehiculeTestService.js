const _vehicule = [{ "reg_no": "SEZ2E", "fleet_type_id": "bus", "model_no": "Toyota Hiace", "chasis_no": "aZS1Z-66", "": "", "": "", }]

const getAll = () => {
    return _vehicule;
};

const get = id => {
    return _vehicule.find(item => item.id === id);
};

const create = (data) => {
    _vehicule.push(data);
};

const update = (old, data) => {

    var foundIndex = _vehicule.findIndex(item => item === old);
    _vehicule[foundIndex] = data;
};

const remove = id => {
    _vehicule.splice(id, 1);
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