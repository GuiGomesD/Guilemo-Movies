var c = 0
let usuarios = []
let users = [[]]
let contas = []
    function enviar(){

        var cadastrado = document.querySelector('.cadastrado');
        var sameuser = document.querySelector('.sameuser');
        var pwerror = document.querySelector('.pwerror');
                
        let u = document.querySelector('#user');
        let user = u.value;

        let p1 = document.querySelector('#senha1');
        let pw1 = p1.value;

        let p2 = document.querySelector('#senha2');
        let pw2 = p2.value;

        var usercheck = usuarios.indexOf(user)
                
        if (usercheck != -1) {
            sameuser.innerHTML = "Nome de usuário já cadastrado" 
        }

        if (pw1 != pw2){
                pwerror.innerHTML = "Senhas incompatíveis"
            }  

        if (usercheck == -1 && pw1 != pw2){
            sameuser.innerHTML = "" 
            pwerror.innerHTML = "Senhas incompatíveis"
        }

             
        else if (pw1 == pw2 && usercheck == -1){
            sameuser.innerHTML = ""
            pwerror.innerHTML = ""
            usuarios[c] = user
            users[c] = [user, pw1]
            c++
            cadastrado.innerHTML = "Cadastrado"
        } 
        }



        /*Login*/

        function logar(){
            let u = document.querySelector('#user');
            let user = u.value;

            let p1 = document.querySelector('#senha1');
            let pw1 = p1.value;

        }