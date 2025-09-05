function birthday(data) {
    const birthday = new Date(data);
    const now = new Date();
    const years = now.getFullYear() - birthday.getFullYear()
    return (years ? years > 14 : true)
}

console.log(birthday('2022-01-01'));
console.log(birthday('2000-01-01'));