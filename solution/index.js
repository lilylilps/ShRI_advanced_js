module.exports = class MySet {
    _uniqueItems = [];

    constructor(itemsArray = []) {
        for (let item of itemsArray) {
            this.add(item);
        }
    }

    get size() {
        return this._uniqueItems.length;
    }

    has(item) {
        return this._uniqueItems.includes(item);
    } 

    add(item) {
        if (!this.has(item)) {
            this._uniqueItems.push(item);
        }

        return this;
    }

    clear() {
        this._uniqueItems = [];
    }

    delete(item) {
        if (this.has(item)) {
            this._uniqueItems.splice(this._uniqueItems.indexOf(item), 1);
        }
    }

    *keys() {
        for (let item of this._uniqueItems) {
            yield item;
        }
    }

    *values() {
        for (let item of this._uniqueItems) {
            yield item;
        }
    }

    *entries() {
        for (let item of this._uniqueItems) {
            yield [item, item];
        }
    }

    forEach(callback, context) {
        for (let item of this._uniqueItems) {
            callback.call(context, item);
        }
    }

    *[Symbol.iterator] () {
        for (let item of this._uniqueItems) {
            yield item;
        }
    } 

    [Symbol.toStringTag] = '^_^';
}