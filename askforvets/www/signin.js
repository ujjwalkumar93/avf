function login() {
    const form = document.getElementById('login-form');
    //const xhttp = new XMLHttpRequest();
    var usr =form.elements[0].value
    var pwd =form.elements[1].value

    var xhr = new XMLHttpRequest();

    var data = new FormData();
    data.append('usr', usr);
    data.append('pwd', pwd);

    xhr.open('POST', 'api/method/askforvets.api.login', true);
    xhr.onload = function () {
        console.log(this);
        if(this.status == 200) {
            window.location.href = "app"
        } else {
            alert("Authentication faill")
        }
    };
    xhr.send(data);
}