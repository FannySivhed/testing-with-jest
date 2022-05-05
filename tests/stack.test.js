const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('peek on stack with one element returns that element', () => {
    // while loopen kontrollerar så att listan är tom, är den inte det, tömmer den listan
    while (stack.peek() != undefined) {
        stack.pop();
    }
    stack.push("hej");
    stack.push("hoj");
    expect(stack.pull()).toBeDefined();
    expect(stack.pull()).toBe("hej");
});

