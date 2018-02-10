'use strict';

const serializers = {
  string: s => '\'' + s + '\'',
  number: n => n + '',
  boolean: b => b.toString(),
  function: f => f.toString(),
  object: o => {
    if (Array.isArray(o)) return '[' + o + ']';
    if (o === null) return 'null';
    let key, value, s = '{';
    for (key in o) {
      value = o[key];
      if (s.length > 1) s += ',';
      s += key + ':' + serialize(value);
    }
    return s + '}';
  }
};

function serialize(o) {
  const type = typeof(o);
  const serializer = serializers[type];
  return serializer(o);
}

const obj1 = {
  field: 'Value',
  subObject: {
    arr: [7, 10, 2, 5],
    fn: x => x / 2
  }
};

console.log(serialize(obj1));
