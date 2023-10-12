    //Pesquisa Open

    function pesqopen(){
      var logo = document.querySelector('.logo')
      var navegation = document.querySelector(".navegation")
      var pesqbox = document.querySelector('#pesq')
      var lupa = document.querySelector('.lupa')
      var lupapesq = document.querySelector('.lupapesq')
      var togglebox = document.querySelector('.toggle').style.display = "none"
      var loginbox = document.querySelector('.login').style.display = "none"
      var second = document.querySelector('.second_part');
      second.style.textAlign = 'center';
      lupa.style.display = 'none'
      logo.style.display = 'none'
      navegation.style.display = 'none'
      pesqbox.style.display = 'flex'
      pesqbox.style.margin = '10px'
      lupapesq.style.display = 'none'

  
    }

    //Mudança de tema
    function toggle() {

      if (document.body.style.background == "white"){
        document.body.style.background = "black"
      }

      else {
        document.body.style.background = "white"
      }

      var element2 = document.querySelector(".filmes");
      var element2 = document.querySelector(".filmes");
      element2.classList.toggle("light-mode-boxes");
    }

    //Previsualização filmes
    
    function preview(){
      document.querySelector(".recommend").style.backgroundImage="url(https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png)"
    }