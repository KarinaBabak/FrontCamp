export function defineGroup() {
    Object.defineProperty(Array.prototype, 'group', {
      enumerable: false,
        value: function (key) {
          var map = {};
          this.map(e => ({k: key(e), d: e})).forEach(e => {
            map[e.k] = map[e.k] || [];
            map[e.k].push(e.d);
          });
          return Object.keys(map).map(k => ({key: k, value: map[k]}));
        }
    });
};