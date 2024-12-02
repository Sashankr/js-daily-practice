function foo() {
  console.log(this.bar);
}

var bar = "global";

const obj1 = {
  bar: "obj1",
  foo: foo,
};

const obj2 = {
  bar: "obj2",
};

foo();
obj1.foo();
foo.call(obj2);
new foo();
