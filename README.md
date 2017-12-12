handle-name
======

后端接口返回的数据实际上是不符合前端对于变量命名的规则,这个中间件就是为了处理变量命名的问题,这里只是处理了一些简单的情况,如果后期遇到复杂的情况,需要在进行优化.

Install
=======

```
$ yarn add @fmfe/handle-name
or
$ npm install @fmfe/handle-name
```

Example:
========

> 目前只接收对象和对象数组

情况1:假设后端接口返回的数据为对象:

```
{
  "UserId": 131076,
  "NickName": "hello1222",
  "RealName": "test",
  "Email": "123456@qq.com",
  "Phone": "12346468435",
  "IDCard": "2010019343",
  "CreateTime": "2017/12/7 11:57:09",
}
```


```
const handleName = require('@fmfe/handle-name');

let data = {
  "UserId": 131076,
  "NickName": "hello1222",
  "RealName": "test",
  "Email": "123456@qq.com",
  "Phone": "12346468435",
  "IDCard": "2010019343",
  "CreateTime": "2017/12/7 11:57:09",
}


const r = handleName(data);
console.log(r);
```

输出结果为:

```
{ 
  userId: 131076,
  nickName: 'hello1222',
  realName: 'test',
  email: '123456@qq.com',
  phone: '12346468435',
  iDCard: '2010019343',
  createTime: '2017/12/7 11:57:09' 
}

```

有时候会存在一些首字母就需要大写的单词,这些不需要转换成小写,如:MT4, IDCard等,如果不需要转换,添加白名单即可.

```
const handleName = require('@fmfe/handle-name');

let data = {
  "UserId": 131076,
  "NickName": "hello1222",
  "RealName": "test",
  "Email": "123456@qq.com",
  "Phone": "12346468435",
  "IDCard": "2010019343",
  "CreateTime": "2017/12/7 11:57:09",
}


const r = handleName(data, ['IDCard']);
console.log(r);
```

输出结果为:

```
{ 
  userId: 131076,
  nickName: 'hello1222',
  realName: 'test',
  email: '123456@qq.com',
  phone: '12346468435',
  IDCard: '2010019343',
  createTime: '2017/12/7 11:57:09' 
}

```

情况2:假设后端接口返回的数据为对象数组:

```
[{
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

```


```
const handleName = require('@fmfe/handle-name');

let data = [{
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

const r = handleName(data);
console.log(r);
```

输出结果为:

```
[{ 
  userId: 131076,
  nickName: 'hello1222',
  realName: 'test',
  email: '123456@qq.com',
  phone: '12346468435',
  IDCard: '2010019343',
  createTime: '2017/12/7 11:57:09' 
},{ 
  userId: 131076,
  nickName: 'hello1222',
  realName: 'test',
  email: '123456@qq.com',
  phone: '12346468435',
  IDCard: '2010019343',
  createTime: '2017/12/7 11:57:09' 
}]

```

