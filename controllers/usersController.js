const users = function(req, res, next) {
    const users = [
        { name: "Jhon", age: 25, city: "Paris", active: true },
        { name: "Jane", age: 30, city: "Paris", active: false },
        { name: "Jack", age: 40, city: "Paris", active: true }
    ]

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            res.render('users', {
                title1: 'Mes utilisateurs',
                title2: 'API Pokemon',
                message: "Hello world",
                users,
                pokemon: data.results
            });
        })
        // res.render('users', {
        //     title: 'Mes utilisateurs',
        //     users
        // });
}

module.exports = {
    users
}