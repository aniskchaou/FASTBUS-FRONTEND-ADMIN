const _schedule = [{ "start": "14h00", "end": "16h00", "duration": "2 heures" }]

const getAll = () => {
    return _schedule;
};

const get = id => {
    return _schedule.find(item => item.id === id);
};

const create = (data) => {
    _schedule.push(data);
};

const update = (old, data) => {

    var foundIndex = _schedule.findIndex(item => item === old);
    _schedule[foundIndex] = data;
};

const remove = id => {
    _schedule.splice(id, 1);
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