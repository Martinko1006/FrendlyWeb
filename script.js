let username;

document.getElementById('check').onclick = function() {
    username = document.getElementById('username');
    var martin = "Martinko1006";
    if (username.value == martin) {
        window.location = "/home"
        alert("Great")
    }
};
