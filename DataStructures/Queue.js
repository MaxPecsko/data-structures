// Create a queue
const Queue = function() {
  collection = [];
  this.print = function() {
    console.log(collection);
  }
  this.enqueue = function(ellement) {
    collection.push(ellement);
  }
  this.dequeue = function() {
    return collection.shift();
  }
  this.front = function() {
    return collection[0];
  }
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return (collection.length === 0);
  }
} 