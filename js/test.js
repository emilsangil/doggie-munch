window.onload = function(){
    loadTest();
}

function loadTest(){
    accArray = [{
        "username": "test",
        "password": "password"
    }]
    localStorage.setItem('account', JSON.stringify(accArray));
}