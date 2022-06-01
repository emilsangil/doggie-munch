window.onload = function(){
    loadTestView();
}

function loadTestView(){
    console.log('reload')
    recipe = JSON.parse(localStorage.getItem('recipe'));

    recipe.forEach(rec => {
        document.getElementById('recipename').value = rec.recipename;
        document.getElementById('recipedescription').value = rec.recipedescription;
        document.getElementById('ingredients').value = rec.ingredients;
        document.getElementById('direction').value = rec.direction;
    })
}

function editRecipe(){
    document.getElementById('recipename').readOnly = false;
    document.getElementById('recipedescription').readOnly = false;
    document.getElementById('ingredients').readOnly = false;
    document.getElementById('direction').readOnly = false;
}

