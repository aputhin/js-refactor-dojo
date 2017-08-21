import Dog from '../dog';
import { add, sub, factorial } from '../numbers';
import fizzBuzzTo from '../fizzbuzz';

import DogsDontTalkError from '../errors/DogsDontTalkError.js';

test('Dog is good', () => {
  const orlando = new Dog('Orlando');
  expect(orlando.name).toBe('Orlando');
  expect(orlando.bark()).toBe('Woof woof!');
  expect(orlando.is()).toBe('up');

  // This is ripe for chaining...
  orlando.sit();
  expect(orlando.is()).toBe('sat down');
  orlando.getUp();
  expect(orlando.is()).toBe('up');

  // ?
  let makeOrlandoTalk = () => {
    orlando.talk();
  }
  expect(makeOrlandoTalk).toThrowError(DogsDontTalkError);
});

test('Adds like a boss', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-900, -900)).toBe(-1800);
  expect(add(-9, 30)).toBe(21);
  expect(add("10", 2)).toBe(12);
});

test('Subtracts like a beast', () => {
  expect(sub(1, 2)).toBe(-1);
  expect(sub(-900, -900)).toBe(0);
  expect(sub(-9, 30)).toBe(-39);
  expect(sub("10", 2)).toBe(8);
});

test('Factorial like a Night King spear throws', () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(4)).toBe(24);
  expect(factorial(10)).toBe(3628800);
  expect(typeof factorial(10)).toBe('number');
  function negative() {
    factorial(-1);
  }
  expect(negative).toThrowError(/negatives/);
});

test('Should fizz and buzz to a hundred properly', () => {
  const fizzBuzzed = fizzBuzzTo(100);
  expect(fizzBuzzed[2]).toBe('Fizz');
  expect(fizzBuzzed[19]).toBe('Buzz');
  expect(fizzBuzzed[44]).toBe('FizzBuzz');
  expect(fizzBuzzed[45]).toBe(46);
  expect(typeof fizzBuzzed[45]).toBe('number');
  expect(fizzBuzzed[99]).toBe('Buzz');
  expect(fizzBuzzed[100]).toBeUndefined();
});
