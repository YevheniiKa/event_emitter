import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("test", (...args) => {
  console.log(args);
});
emitter.once("test", (...args) => {
  console.log("Hello", args);
});

emitter.prependListener("test", (...args) => {
  console.log("hello0", args);
});

emitter.emit("test", 1, 2, 3, 4, 5);
emitter.emit("test", 5);
console.log("after");
