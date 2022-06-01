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

