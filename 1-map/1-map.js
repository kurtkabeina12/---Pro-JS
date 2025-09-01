const data = [{
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    }
];

function deleteDuplicate(arr) {
    const uniqueIds = new Set();

    return arr.map(item => {
        const isDuplicate = arr.find(existingItem =>
            existingItem.id === item.id &&
            existingItem.name === item.name
        ) !== item;

        if (!isDuplicate && !uniqueIds.has(item.id)) {
            uniqueIds.add(item.id);
            return item;
        }
        return null;
    }).filter(item => item !== null);
}

function deleteDuplicateById(arr) {
    const seenIds = new Set();
    return arr.filter(item => {
        return seenIds.has(item.id) ? false : seenIds.add(item.id);
    });
}

console.log(deleteDuplicate(data));
console.log(deleteDuplicateById(data));