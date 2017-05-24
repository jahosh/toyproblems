const mixEvents = (obj) => {
  let events = new Map();
  obj.events = events;

  obj.trigger = function (event) {

    let args = Array.from(arguments).slice(1);

    for (let key of events.keys()) {
      if (key === event) {
        let funcArray = events.get(event);
        let self = this;
        funcArray.forEach(function (funct) {
          funct.apply(self, args);
        });
      }
    }

  };

  obj.on = (event, callback) => {

    if (events.get(event)) {
      let funcHolder = events.get(event);
      funcHolder.push(callback);
      return;
    }

    let funcHolder = [];

    funcHolder.push(callback);
    events.set(event, funcHolder);
    
  };
  return obj;
};