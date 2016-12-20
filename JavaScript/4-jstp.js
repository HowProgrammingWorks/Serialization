'use strict';

function serialize(obj) {
  if (obj === null) return 'null';
  else if (typeof(obj) === 'string') return '\'' + obj + '\'';
  else if (typeof(obj) === 'number') return obj + '';
  else if (typeof(obj) === 'boolean') return obj.toString();
  else if (typeof(obj) !== 'object') return obj + '';
  else if (Array.isArray(obj)) {
    return '[' + obj + ']';
  } else {
    let key, value, s = '{';
    for (key in obj) {
      value = obj[key];
      if (s.length > 1) s += ',';
      s += key + ':' + serialize(value);
    }
    return s + '}';
  }
}

let obj1 = {
  field: 'Value',
  subObject: {
    arr: [7, 10, 2, 5],
    fn: x => x / 2
  }
};

console.log(serialize(obj1));
