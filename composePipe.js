const compose = (...functions) => {
  return (result) => {
    for (let i = functions.length-1; i > -1; i--) {
      result = functions[i].call(this, result);
    }
    return result;
  }
};

const pipe = (...functions) => {
  return (result) => {
    for (let i = 0; i < functions.length; i++) {
      result = functions[i].call(this, result);
    }
    return result;
  }
};

