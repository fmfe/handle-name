const _ = require('lodash');

module.exports = (data, whiteList = []) => {
    if (Array.isArray(data)) {
        const result =  _.map(data, (item) => {
            return handle(item, whiteList);
        });
        return result;
    } else {
        const result = handle(data, whiteList);
        return result;
    }
}

function handle(obj, whiteList) {
    return _.transform(obj, (result, value, key) => {
        let name = key;
        const flag = whiteList.indexOf(key); 
        if (flag === -1) {
            name = name[0].toLowerCase() + name.slice(1);
        }
        result[name] = value;
    });
}
