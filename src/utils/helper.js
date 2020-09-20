function chunks(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input should be Array');
    }

    if (typeof size !== 'number') {
        throw new TypeError('Size should be a Number');
    }

    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
        return arr.slice(i * size, i * size + size);
    });
}

export default chunks;
