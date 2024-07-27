const helper = (obj, path, value) => {
  let [current, ...rest] = path;
  if (rest.length > 0) {
    if (!obj[current]) {
      const isNumber = `${+rest[0]}` === rest[0];
      obj[current] = isNumber ? [] : {};
    }
    obj[current] = helper(obj[current], rest, value);
  } else {
    obj[current] = value;
  }
  return obj;
};

const set = (obj, path, value) => {
  let pathArr = path;
  if (typeof path === "string") {
    pathArr = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  helper(obj, pathArr, value);
};

const abc = {
  a: {
    b: {
      c: [1, 2, 3],
    },
    d: {
      a: "hello",
    },
  },
};

const instance1 = JSON.parse(JSON.stringify(abc));
set(instance1, "a.b.c", "learnersbucket");
console.log(instance1.a.b.c); // "learnersbucket"

const instance2 = JSON.parse(JSON.stringify(abc));
set(instance2, "a.b.c.0", "learnersbucket");
console.log(instance2.a.b.c[0]); // "learnersbucket"

const instance3 = JSON.parse(JSON.stringify(abc));
set(instance3, "a.b.c[1]", "learnersbucket");
console.log(instance3.a.b.c[1]); // "learnersbucket"

const instance4 = JSON.parse(JSON.stringify(abc));
set(instance4, ["a", "b", "c", "2"], "learnersbucket");
console.log(instance4.a.b.c[2]); // "learnersbucket"

const instance5 = JSON.parse(JSON.stringify(abc));
set(instance5, "a.b.c[3]", "learnersbucket");
console.log(instance5.a.b.c[3]); // "learnersbucket"

const instance6 = JSON.parse(JSON.stringify(abc));
set(instance6, "a.c.d[0]", "learnersbucket");
console.log(instance6.a.c?.d?.[0]); // "learnersbucket"

const instance7 = JSON.parse(JSON.stringify(abc));
set(instance7, "a.d.01", "learnersbucket");
console.log(instance7.a.d["01"]); // "learnersbucket"

const object = { a: [{ b: { c: 3 } }] };
set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c); // 4

set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z); // 5
