function spyOn(fn) {
  const argsStorage = {};
  const valuesStorage = [];

  const spy = (...params) => {
    let args = Array.from(params);
    args.forEach((arg) => {
      argsStorage[arg] = arg;
    });
    let result = fn.apply(null, args);
    valuesStorage.push(result);
    return result;
  }

  spy.callCount = () => valuesStorage.length

  spy.wasCalledWith = (arg) => {
    if (argsStorage[arg]) {
      return true;
    }
    return false;
  }

  spy.returned = (val) => {
    if (valuesStorage.indexOf(val) != -1) {
      return true;
    }
    return false;
  }
  return spy;
}