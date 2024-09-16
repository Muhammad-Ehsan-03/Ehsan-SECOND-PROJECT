function login() {
    var email = document.querySelector('input#Email').value
    var pass = document.querySelector('input#password').value
    if (email == 'MuhammadEhsan' && pass == 'test') {
        document.querySelector('.alert-success').style.display = 'block';
        document.querySelector('.alert-danger').style.display = 'none';
        document.querySelector('.button-div').style.display = 'block';
    }
    else {
        document.querySelector('.button-div').style.display = 'none';
        document.querySelector('.alert-success').style.display = 'none';
        document.querySelector('.alert-danger').style.display = 'block';
    }
}

function CashDep() {
    var Balance = 50000;
    var Amount = document.getElementById('deposit').value
    var password = document.getElementById('passw').value
    var remain=Balance + Amount;
    if (password == 'test') {
        var html1 = '';
        var html = '';
        html += '<p> Before Deposit Your Balance is 50,000 </p>';
        html += '<p> After Deposit Your Remaining Amount is '+remain+'</p>';
        html1 += '<p> Amount </p>';
        html1 += '<h1> Rs. ' + Amount + '</h1>';
    }
    var widrawMessage = document.querySelector('.deposit');
    widrawMessage.innerHTML = html;
    document.querySelector('.box-3').style.display = 'block';
    document.querySelector('.message').style.display = 'block';
    document.querySelector('.deposit').style.display='block';
    var result = document.querySelector('.cash');
    result.innerHTML = html1;
}


function Widraw() {
    var Balance = 50000;
    var amount = document.querySelector('input#Widraw').value
    var password = document.querySelector('input#pas').value

    if (password == 'test') {
        var html1 = '';
        var html = '';
        html += '<p> Before Witdhraw Your Balance is 50,000 </p>';
        html += '<p> After Widtdhraw Your Remaining Amount is ' + (Balance - amount) + '</p>';
        html1 += '<p> Amount </p>';
        html1 += '<h1> Rs. ' + amount + '</h1>';
    }
    var Deposit = document.querySelector('.widraw');
    Deposit.innerHTML = html;
    document.querySelector('.box-2').style.display = 'block';
    document.querySelector('.message').style.display = 'block';
    var result = document.querySelector('.cash');
    result.innerHTML = html1;
    document.querySelector('.Widraw').style.display='block';
}
function DisplayWidraw() {
    document.querySelector('.container-2').style.display = 'block';
    document.querySelector('.container-3').style.display = 'none';
}
function Displaydeposit() {
    document.querySelector('.container-3').style.display = 'block';
    document.querySelector('.container-2').style.display = 'none';
}