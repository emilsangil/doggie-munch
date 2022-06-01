window.onload = function(){
    loadRecipe();
}

function loadRecipe(){
    if (localStorage.getItem('recipe'))    {
        recipes = JSON.parse(localStorage.getItem('recipe')) ;
    }

    cardContainer = document.getElementById('card-container');
    cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id = 'card';
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
    cardHeader.id = 'recipes-header';
    cardContent.append(cardHeader);
    cardDesc = document.createElement('span');
    cardDesc.className = 'card-desc';
    cardDesc.id = 'recipe-desc';
    cardContent.append(cardDesc);
    cardLink = document.createElement('div');
    cardLink.className = 'link'
    cardContent.append(cardLink);
    cardA = document.createElement('a')
    cardA.href = 'viewRecipe.html';
    cardA.innerText = 'View Recipe';
    cardA.onclick = function(){
        view();
    }
    cardContent.append(cardA);

    recipes.forEach(recipe => {
        cardHeader.innerText = recipe.recipename
        cardDesc.innerText = recipe.recipedescription
    })
}

function loadTest(){
    accArray = [{
        "username": "test",
        "password": "password"
    }]
    localStorage.setItem('account', JSON.stringify(accArray));
}

function addRecipe(){
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

function view(){
    viewArray = [];

    viewObject = {};

    recipes = document.querySelectorAll('#card')

    recipes.forEach(recipe => {
        console.log(recipe)
    })

    recipeName = document.getElementById('recipe-name').value;
    recipeDesc = document.getElementById('recipe-desc').value;

    viewObject.recipename = recipeName;
    viewObject.recipedesc = recipeDesc;

    viewArray.push(viewObject);

    localStorage.setItem('view', JSON.stringify(viewArray));

}

function search(){
    searchValue = document.getElementById('search').value;

    if(document.getElementById('card')){
        searchResults = document.getElementById('card').removeChild(document.getElementById('card-box'), lastChild);
    }

    if(localStorage.getItem('view')){
        viewArray = JSON.parse(localStorage.getItem('view'));

        viewArray2 = document.querySelectorAll('.card-header');

        

        viewArray2.forEach(card => {

        if(card.innerText.includes(searchValue)){
            cardContainer = document.getElementById('card-container');
            cardDiv = document.createElement('div');d
            cardDiv.className = 'card';
            cardDiv.id = 'card';
            cardContainer.append(cardDiv);
            cardBox = document.createElement('div');
            cardBox.id = '6';
            cardDiv.append(cardBox);
            cardImg = document.createElement('img');
            cardImg.src = 'images/recipes.jpg';
            cardBox.append(cardImg);
            cardContent = document.createElement('div');
            cardContent.className = 'cardContent';
            cardDiv.append(cardContent);
            cardHeader = document.createElement('span');
            cardHeader.className = 'card-header';
            cardHeader.id = 'recipes-header';
            cardContent.append(cardHeader);
            cardDesc = document.createElement('span');
            cardDesc.className = 'card-desc';
            cardDesc.id = 'recipe-desc';
            cardContent.append(cardDesc);
            cardLink = document.createElement('div');
            cardLink.className = 'link'
            cardContent.append(cardLink);
            cardA = document.createElement('a')
            cardA.href = 'viewRecipe.html';
            cardA.innerText = 'View Recipe';
            cardA.onclick = function(){
                view();
            }
            cardContent.append(cardA);
        }

            console.log(card.innerText)
            cardHeader.innerText = card.innerText
            cardDesc.innerText = card.recipedescription
        })
    }
}
