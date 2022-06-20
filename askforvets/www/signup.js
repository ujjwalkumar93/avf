function signup() {
    const form = document.getElementById('signup-form');
    //const xhttp = new XMLHttpRequest();
    var fname =form.elements[0].value
    var email =form.elements[1].value
    var pwd =form.elements[2].value
    var verification_pwd =form.elements[3].value

    if (pwd === verification_pwd){
        var xhr = new XMLHttpRequest();
        var data = new FormData();
        data.append('fname', fname);
        data.append('email', email);
        data.append('pwd', pwd);
        xhr.open('POST', 'api/method/askforvets.api.signup', true);
        xhr.onload = function () {
            console.log(this);
            if(this.status == 200) {
                window.location.href = "signin"
            } else {
                alert("something went wrong")
            }
        };
        xhr.send(data);
    } else {
        alert("password did not match")
    }

    
}