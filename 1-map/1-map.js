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

console.log(deleteDuplicate(data));