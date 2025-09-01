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
    },
]

function deleteDuplicate(arr) {
    const newArr = [...new Map(arr.map((item) => [item.id, item])).values()]
    return newArr
}

console.log(deleteDuplicate(data))