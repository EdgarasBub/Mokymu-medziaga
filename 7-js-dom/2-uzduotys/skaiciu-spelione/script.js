    function hideContent (VisoGero) {
    document.getElementById(VisoGero).style.display = "none";
    } 
    function hideContent (VisoGero) {
    document.getElementById(VisoGero).style.display = "none";
    } 


    function unhideContent(hello) {
        document.getElementById(hello).style.display= "flex";
    }
    function unhideContent(hello) {
        document.getElementById(hello).style.display= "flex";
    }


    function unhideContent1(hello1) {
        document.getElementById(hello1).style.display= "grid";
    }




  let y = Math.floor(Math.random() * 1 + 1);

  let guess = 1;

  document.getElementById('speti').onclick = function () {
    
    let rezultDiv = document.getElementById('result')
      let x = document.getElementById("guessField").value;
      if (x == y) {
        hideContent('body-div');
        unhideContent1("second-window");
      }
      else if (x > y) {
          unhideContent("hide") 
          guess++;
          rezultDiv.innerHTML = `<p>Spekite <span> Mazesni </span> skaiciu </p>`;
      }
      else {
          unhideContent("hide") 
          guess++;
          rezultDiv.innerHTML = `<p>Spekite <span> Didesni </span> skaiciu </p>`;
      }
  }

document.getElementById('isNaujo').onclick = function () {

    !hideContent('body-div');
    !unhideContent1('second-window');
}