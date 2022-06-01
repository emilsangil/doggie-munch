window.onload = function(){
    loadRecipe();
    console.log('Recipe loaded')
}

function loadRecipe(){
    if (localStorage.getItem('recipe'))    {
        recipes = JSON.parse(localStorage.getItem('recipe')) ;
    }

    cardContainer = document.getElementById('card-container');
    cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardContainer.append(cardDiv);
    cardBox = document.createElement('div');
    cardDiv.append(cardBox);
    cardImg = document.createElement('img');
    cardImg.src = 'images/recipes.jpg';
    cardBox.append(cardImg);
    cardContent = document.createElement('div');
    cardContent.className = 'cardContent';
    cardDiv.append(cardContent);
    cardHeader = document.createElement('span');
    cardHeader.className = 'card-header';
    cardContent.append(cardHeader);
    cardDesc = document.createElement('span');
    cardDesc.className = 'card-desc'
    cardContent.append(cardDesc);
    cardLink = document.createElement('div');
    cardLink.className = 'link'
    cardContent.append(cardLink);
    cardA = document.createElement('a')
    cardA.href = 'viewRecipe.html';
    cardA.innerText = 'View Recipe';
    cardContent.append(cardA);

    recipes.forEach(recipe => {
        cardHeader.innerText = recipe.recipename
        cardDesc.innerText = recipe.recipedescription
    })
}

function addRecipe(){
    console.log('clicked');

    recipeArray = [];

    recipeObject = {};

    recipe = document.getElementById('recipename');
    description = document.getElementById('recipedescription');
    ingredients = document.getElementById('ingredients');
    direction = document.getElementById('direction');

    recipeObject.recipename = recipe.value;
    recipeObject.recipedescription = description.value;
    recipeObject.ingredients = ingredients.value;
    recipeObject.direction = direction.value;

    recipeArray.push(recipeObject);

    localStorage.setItem('recipe', JSON.stringify(recipeArray));
    field = document.getElementById('alert-wrapper');
    alertContainer = document.createElement('div');
    alertContainer.id = 'alert-container'
    alertDanger = document.createElement('div');
    alertDanger.id = 'alerts'
    alertDanger.className = 'alert alert-success';
    alertDanger.textContent = 'Recipe has been added!'
    field.prepend(alertContainer);
    alertContainer.append(alertDanger)

    // if (document.getElementById("alert-container"))  {
    //     document.getElementById("alert-container").removeChild(document.getElementById("alerts"))
    // }
    // if(!recipe || !description || !ingredients || !direction){
    //     field = document.getElementById('alert-wrapper');
    //     alertContainer = document.createElement('div');
    //     alertContainer.id = 'alert-container'
    //     alertDanger = document.createElement('div');
    //     alertDanger.id = 'alerts'
    //     alertDanger.className = 'alert alert-danger';
    //     alertDanger.textContent = 'All fields should not be empty'
    //     field.prepend(alertContainer);
    //     alertContainer.append(alertDanger)
    // }else{
    //     field = document.getElementById('alert-wrapper');
    //     alertContainer = document.createElement('div');
    //     alertContainer.id = 'alert-container'
    //     alertSuccess = document.createElement('div');
    //     alertSuccess.id = 'alerts'
    //     alertSuccess.className = 'alert alert-success';
    //     alertSuccess.textContent = 'You have successfully added your recipe!'
    //     field.prepend(alertContainer);
    //     alertContainer.append(alertSuccess)
    // }

}

