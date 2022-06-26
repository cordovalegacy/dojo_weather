var cookies = "This page says" + " loading weather report" 
function clickCity() {
    document.querySelector('#cities');
    alert(cookies);
}

function acceptCookies() {
    document.querySelector('.cookie-message').remove();
} 

var tempF = [75, 64, 80, 66, 70, 61, 79, 70]

function cToF(){
    document.querySelector('#temp-type').value;
    document.querySelector('#high1').innerHTML = tempF[0] + "'";
    document.querySelector('#high2').innerHTML = tempF[2] + "'";
    document.querySelector('#high3').innerHTML = tempF[4] + "'";
    document.querySelector('#high4').innerHTML = tempF[6] + "'";
    document.querySelector('#low1').innerHTML = tempF[1] + "'";
    document.querySelector('#low2').innerHTML = tempF[3] + "'";
    document.querySelector('#low3').innerHTML = tempF[5] + "'";
    document.querySelector('#low4').innerHTML = tempF[7] + "'";
}
