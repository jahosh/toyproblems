
const bind = (func, context) => {
  const args = Array.from(arguments).slice(2);
  context = context || null;

  return function () {
    return func.apply(context, args.concat(
      Array.from(arguments)));
  }
};

Function.prototype.bind = function(context) {
  const self = this;
  const args = Array.from(arguments).slice(1);
  return function () {
    return self.apply(context, args.concat(Array.from(arguments)));
  };
}