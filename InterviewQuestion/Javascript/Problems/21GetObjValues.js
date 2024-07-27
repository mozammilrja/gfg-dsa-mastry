const get = (obj, path) => {
  if (path === "" || path.length === 0) return undefined;
  if (Array.isArray(path)) path = path.join(".");
  let expectPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "[" && path[i] !== "]" && path[i] !== ".") {
      expectPath.push(path[i]);
    }
  }
  const value = expectPath.reduce((source, path) => source[path], obj);
  return value ? value : undefined;
};

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, "a.b.c[3]"));

//output
// [1,2,3]
// 1
// 2
// undefined
