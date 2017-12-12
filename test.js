const handleName = require('./index');

let data = {
        "UserId": 131076,
        "NickName": "hello1222",
        "RealName": "test",
        "Email": "123456@qq.com",
        "Phone": "12346468435",
        "IDCard": "2010019343",
        "CreateTime": "2017/12/7 11:57:09",
    }

let arr = [{
        "UserId": 131076,
        "NickName": "hello1222",
        "RealName": "test",
        "Email": "123456@qq.com",
        "Phone": "12346468435",
        "IDCard": "2010019343",
        "CreateTime": "2017/12/7 11:57:09",
    },{
        "UserId": 131076,
        "NickName": "hello1222",
        "RealName": "test",
        "Email": "123456@qq.com",
        "Phone": "12346468435",
        "IDCard": "2010019343",
        "CreateTime": "2017/12/7 11:57:09",
    }]

const r = handleName(arr, ['IDCard']);
console.log(r);
