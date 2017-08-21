function DogsDontTalkError(message) {
  this.name = 'DogsDontTalkError';
  this.message = message || `Dogs don't talk, stupid human!`;
  this.stack = (new TypeError()).stack;
}
DogsDontTalkError.prototype = Object.create(DogsDontTalkError.prototype);
DogsDontTalkError.prototype.constructor = DogsDontTalkError;

export default DogsDontTalkError;
