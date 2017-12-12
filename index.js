const _ = require('lodash');

module.exports = (obj, whiteList = []) => {
    console.log(whiteList);
    return _.transform(obj, (result, value, key) => {
        let name = key;
        const flag = whiteList.indexOf(key); 
        if (flag === -1) {
            name = name[0].toLowerCase() + name.slice(1);
        }
        result[name] = value;
    });
}
