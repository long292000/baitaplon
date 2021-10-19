class Login {
    $txtId;
    $txtPassword;
    $formLogin;
    $btnSubmit;

    constructor(){
        this.$txtId=document.createElement("input");
        this.$txtId.type = "text"
        this.$txtId.placeholder= "Enter your ID";

        this.$txtPassword=document.createElement("input");
        this.$txtPassword.type= "password";
        this.$txtPassword.placeholder = "Enter your password";

        this.$formLogin = document.createElement("form");
        this.$formLogin.addEventListener("submit",this.login)

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type = "submit";
        this.$btnSubmit.innerHTML = "Login";
    }

    login = (event) =>{
        event.preventDefault();
        const id = this.$txtId.value;
        const password = this.$txtPassword.value;

        //Truyền dữ liệu đi để login
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": id,
            "password": password
    });

        var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
        redirect: 'follow'
    };

        fetch("http://localhost:5000/login", requestOptions)
        .then(response =>{
            if(response.ok){
             return response.json()
            }
            throw Error(response.status);
        }
            )


            
        .then(result =>{ 
            console.log(result)
            localStorage.setItem("accessToken", result.accessToken)
            alert("Thanh cong")
        })
        .catch(error =>{
             console.log('error', error)});
             alert("Sai mat khau hoan password");
        
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "centering");
        const title = document.createElement("h2");
        title.innerHTML="Login";

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$txtId);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);

        this.$formLogin.appendChild(flexContainer);
        container.appendChild(this.$formLogin);
    };
}

export default Login;