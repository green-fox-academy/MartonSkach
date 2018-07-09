let prison = (name) => {
  let prisoner = name;
  let visitCount = 0;
  return {
    visit: function() {
      if (visitCount === null) {
        return `Nobody is here anymore` 
      }
      visitCount += 1;
      return `${prisoner} is visited ${visitCount} time(s)` 
    },
    escape: function () {
      visitCount = null;
      return `BREAKING NEWS, ${prisoner} escaped the prison`
    }
  };  
};

const alcatraz = prison('Sad Panda');

console.log(alcatraz.visit()); // Sad Panda is visited 1 time(s)
console.log(alcatraz.visit()); // Sad Panda is visited 2 time(s)
console.log(alcatraz.escape()); // BREAKING NEWS, Sad Panda escaped the prison
console.log(alcatraz.visit()); // Nobody is here anymore