const seq = (...args) => {
   if (typeof args[0] === "number") {
      return args[0];
   }
   function next(arg) {
      if (typeof arg === 'function') {
         return seq(...args, arg);
      }
      return args.reduceRight((acc, fn) => fn(acc), arg);
   };
   return next;
};

console.log(seq(x => x + 7)
               (x => x * 2)(5)); // Результат: 17

console.log(seq(x => x * 2)
               (x => x + 7)(5)); // Результат: 24

console.log(seq(x => x + 1)
               (x => x * 2)
               (x => x / 3)
               (x => x - 4)(7)); // Результат: 3

console.log(seq(10)); // Результат: 10