const { Circle, Triangle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
  const shape = new Triangle();
  shape.logoShapeColor('blue');
  expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle renders correctly', () => {
  const shape = new Circle();
  shape.logoShapeColor('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
  const shape = new Square();
  shape.logoShapeColor('green');
  expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
