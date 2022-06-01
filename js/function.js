function getElement(id)
{
    return document.getElementById(id)
}


function register(){
    let accArray = [];

    if (localStorage.getItem('account'))    {
        acc = JSON.parse(localStorage.getItem('account')) ;
    }

    accObject = {};

    accObject.username = document.getElementById('username').value;
    accObject.password = document.getElementById('password').value;

    accArray.push(accObject);

    localStorage.setItem('account', JSON.stringify(accArray));

    user = document.getElementById('username').value
    pass = document.getElementById('password').value

    if(!user || !pass){
        field = document.getElementById('field-id');
        alertContainer = document.createElement('div');
        alertContainer.id = 'alert-container'
        alertDanger = document.createElement('div');
        alertDanger.id = 'alerts'
        alertDanger.className = 'alert alert-danger';
        alertDanger.textContent = 'Username and Password should not be empty or Username already exist'
        field.prepend(alertContainer);
        alertContainer.append(alertDanger)
    }else{
        field = document.getElementById('field-id');
        alertContainer = document.createElement('div');
        alertContainer.id = 'alert-container'
        alertSuccess = document.createElement('div');
        alertSuccess.id = 'alerts'
        alertSuccess.className = 'alert alert-success';
        alertSuccess.textContent = 'You have successfully register! redirecting to login page'
        field.prepend(alertContainer);
        alertContainer.append(alertSuccess)
        setTimeout(function(){window.location.href = 'login.html'}, 2000);
    }

}

function login(){
    if (localStorage.getItem('account'))    {
        acc = JSON.parse(localStorage.getItem('account')) ;
    }

    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;

    acc.forEach(account => {
        if (document.getElementById("alert-container"))  {
            document.getElementById("alert-container").removeChild(document.getElementById("alerts"))
        }
        if(user == account.username && pass == account.password){
            field = document.getElementById('field-id');
            alertContainer = document.createElement('div');
            alertContainer.id = 'alert-container'
            alertSuccess = document.createElement('div');
            alertSuccess.id = 'alerts'
            alertSuccess.className = 'alert alert-success';
            alertSuccess.textContent = 'You have successfully login!'
            field.prepend(alertContainer);
            alertContainer.append(alertSuccess)
            setTimeout(function(){window.location.href = 'index.html'}, 2000);
        }
        else{
            field = document.getElementById('field-id');
            alertContainer = document.createElement('div');
            alertContainer.id = 'alert-container'
            alertDanger = document.createElement('div');
            alertDanger.id = 'alerts'
            alertDanger.className = 'alert alert-danger';
            alertDanger.textContent = 'Incorrect username and/or password'
            field.prepend(alertContainer);
            alertContainer.append(alertDanger)
        }
    });



}