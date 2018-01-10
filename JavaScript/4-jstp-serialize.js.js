'use strict';

function serialize(obj) {
  let type = typeof(obj);
  if (obj === null) type = 'null';
  else if (Array.isArray(obj)) type = 'array';
  const typeSwitch = {
    null: () => null,
    array: obj => '[' + obj + ']',
    string: obj => '\'' + obj + '\'',
    boolean: obj => obj.toString(),
    number: obj => obj + '',
    object: obj => {
      let key, value, s = '{';
      for (key in obj) {
        value = obj[key];
        if (s.length > 1) s += ', ';
        s += key + ': ' + serialize(value);
      }
      return s + '}';
    }
  };
  return (type in typeSwitch) ? typeSwitch[type](obj) : obj + '';
}

const obj1 = {
  field: 'Value',
  subObject: {
    arr: [7, 10, 2, 5],
    fn: x => x / 2
  }
};

console.log(serialize(obj1));
