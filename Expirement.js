function renderCoffee(coffee) {
    var div = document.createElement('div'); // Create a <div> element

    var heading = document.createElement('h2'); // Create a <h2> element for coffee name
    heading.textContent = coffee.name; // Set the coffee name as the text content of the heading
    div.appendChild(heading); // Append the heading to the div

    var paragraph = document.createElement('p'); // Create a <p> element for roast type
    paragraph.textContent = coffee.roast; // Set the roast type as the text content of the paragraph
    div.appendChild(paragraph); // Append the paragraph to the div

    return div; // Return the created div element
}

function renderCoffees(coffees) {
    var coffeesContainer = document.getElementById('coffees');
    coffeesContainer.innerHTML = ''; // Clear the existing content

    coffees.forEach(function(coffee) {
        var coffeeDiv = renderCoffee(coffee); // Create a div element for each coffee
        coffeesContainer.appendChild(coffeeDiv); // Append the coffee div to the coffees container
    });
}

function updateCoffees(e) {
    e.preventDefault(); // Prevent form submission

    var selectedRoast = roastSelection.value; // Get the selected roast value from the roast selection menu
    var searchTerm = searchInput.value.toLowerCase(); // Get the search term from the input field and convert it to lowercase

    var filteredCoffees = coffees.filter(function(coffee) {
        // Filter coffees based on selected roast and search term
        if (selectedRoast === 'All' || coffee.roast === selectedRoast) {
            return coffee.name.toLowerCase().includes(searchTerm);
        }
    });

    filteredCoffees.sort(function(a, b) {
        return a.id - b.id; // Sort coffees by their ids in ascending order
    });

    renderCoffees(filteredCoffees); // Display the filtered and sorted coffees
}

// Define the array of coffees
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High
