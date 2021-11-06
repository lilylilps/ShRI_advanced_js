const MySet = require('./solution/index');
const assert = require('assert');

//тесты
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
assert.deepStrictEqual([...set], [ 4, 8, 15, 16, 23, 42 ]);

// есть свойство size
assert.equal(set.size, 6);

// работает в цикле for-of
const testArr = [];

for (const item of set) {
    testArr.push(item);
}

assert.deepStrictEqual(testArr, [ 4, 8, 15, 16, 23, 42 ]);

// есть метод keys
const keysArr = [];

for (const item of set.keys()) {
    keysArr.push(item);
}

assert.deepStrictEqual(keysArr, [ 4, 8, 15, 16, 23, 42 ]);

// есть метод values
const valuesArr = [];

for (const item of set.values()) {
    valuesArr.push(item);
}

assert.deepStrictEqual(valuesArr, [ 4, 8, 15, 16, 23, 42 ]);

// есть метод entries
const entriesArr = [];

for (const item of set.entries()) {
    entriesArr.push(item);
}

assert.deepStrictEqual(entriesArr, [ [4, 4], [8, 8], [15, 15], [16, 16], [23, 23], [42, 42] ]);

// есть метод clear
set.clear();
assert.equal(set.size, 0);

const object = {
    getValue () { return this.value }
}

const data = {
    value: 42
}

// есть метод add
set.add(object);
set.add(data);
assert.deepStrictEqual([...set], [object, data]);

// который может работать в цепочке вызовов
set.add(object).add(object).add(object);
assert.deepStrictEqual([...set], [object, data]);

// есть метод delete
set.delete(data);
assert.deepStrictEqual([...set], [object]);

// есть метод has
assert.equal(set.has({}), false);
assert.equal(set.has(object), true);
assert.equal(set.has(data), false);

// и кое-что еще
assert.equal(set === set.valueOf(), true);
assert.equal(String(set), '[object ^_^]');
assert.equal(Object.prototype.toString.call(set), '[object ^_^]');

// есть forEach, который делает какие-то странные вещи...
set.forEach(function (item) {
    assert.equal(item.getValue.call(this), 42);
}, data);
