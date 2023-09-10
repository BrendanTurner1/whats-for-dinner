//Query Selectors
var form = document.querySelector("form");
var meal = document.getElementsByName('meal');
var result = document.querySelector('.result');
var display = document.querySelectorAll('article');
var closeButton = document.querySelector('.close');
var mealChoice = document.querySelector('.meal-choice');

//Data
var sides = ['Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'];

var mainDishes = ['Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza]'];

var desserts = ['Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'];

var meals = {
    dessert: desserts,
    side: sides,
    mainDish: mainDishes,
    entireMeal: []
}
//Event Listeners
form.addEventListener("submit", displayRandomMeal);
closeButton.addEventListener("click", togglePot);

//Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function displayRandomMeal(event) {
    for( i = 0; i < meal.length; i++) {
        if(meal[i].checked) {
            value = randomMeal(meal[i].value)
            mealChoice.innerHTML = ''
            mealChoice.innerHTML += `${value}`
            if(display[1].classList.contains('hidden')) {
                togglePot()
            }
        }
    }
    event.preventDefault();
}

function randomMeal(value) {
    return meals[value][getRandomIndex(meals[value])];
}

function displayElement(element) {
    element.classList.toggle("hidden");
}
function togglePot() {
    displayElement(display[0]);
    displayElement(display[1]);
}
