let data = [
    {
        name: 'Janis',
        age: '32'
    },
    {
        name: 'Peteris',
        age: '25'
    },
    {
        name: 'Juris',
        age: '31'
    },
    {
        name: 'Eriks',
        age: '26'
    },
    {
        name: 'Elmars',
        age: '29'
    },
    {
        name: 'Ralfs',
        age: '27'
    },
    {
        name: 'Dags',
        age: '19'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age +' years old' + '</div>';
});

info.innerHTML = details.join('\n');