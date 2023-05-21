function renderCoffee(coffee) {
    var div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-md-4', 'col-lg-3'); // Add bootstrap column classes to div

    var heading = document.createElement('h2');
    heading.textContent = coffee.name;
    div.appendChild(heading);

    var paragraph = document.createElement('p');
    paragraph.textContent = coffee.roast;
    div.appendChild(paragraph);

    return div;
}

function renderCoffees(coffees) {
    var coffeesContainer = document.getElementById('coffees');
    coffeesContainer.innerHTML = '';

    coffees.forEach(function(coffee) {
        var coffeeDiv = renderCoffee(coffee);
        coffeesContainer.appendChild(coffeeDiv);
    });
}


function updateCoffees(e) {
    e.preventDefault();

    var searchTerm = searchInput.value.toLowerCase();
    var selectedRoast = roastSelection.value;

    var filteredCoffees = coffees.filter(function(coffee) {
        if (selectedRoast === 'All' || coffee.roast === selectedRoast) {
            return coffee.name.toLowerCase().includes(searchTerm);
        }
    });

    filteredCoffees.sort(function(a, b) {
        return a.id - b.id;
    });

    renderCoffees(filteredCoffees);
}


// dont write past this

function addCoffee(e) {
    e.preventDefault();

    var coffeeName = coffeeNameInput.value;
    var coffeeRoast = coffeeRoastInput.value;

    if (coffeeName && coffeeRoast) {
        var newCoffee = {
            id: coffees.length + 1,
            name: coffeeName,
            roast: coffeeRoast
        };

        coffees.push(newCoffee);
        renderCoffees(coffees);
        coffeeNameInput.value = '';
        coffeeRoastInput.value = '';
    }
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeesContainer = document.getElementById('coffees');
var searchInput = document.querySelector('#search');
var roastSelection = document.querySelector('#roast-selection');
var coffeeNameInput = document.querySelector('#coffee-name');
var coffeeRoastInput = document.querySelector('#coffee-roast');
var submitButton = document.querySelector('#submit');
var addCoffeeButton = document.querySelector('#add-coffee');

submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener('input', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
addCoffeeButton.addEventListener('click', addCoffee);

renderCoffees(coffees);
