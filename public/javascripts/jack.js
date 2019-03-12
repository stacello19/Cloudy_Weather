let pictures = document.querySelectorAll(".pic");
pictures.forEach(pic => pic.addEventListener("click", function(e){

    
    let selected = e.target;
    if(selected.classList.contains('nonpic')) return;

    let selected_src = selected.getAttribute('src');

    let modal_div = document.createElement('div');
    modal_div.style.display = 'block'
    modal_div.setAttribute('class', 'modal')

    let imgg = document.createElement('img');
    imgg.setAttribute('src', selected_src)

    imgg.setAttribute("style", "height: 500px; width: 400px; position: absolute; top: 10%;left: 35%; border: 2px solid white;")
    modal_div.appendChild(imgg); 
    document.body.appendChild(modal_div);

    modal_div.onclick = function(event) {
        if (event.target !== imgg) {
          modal_div.style.display = "none";
        }
      }
}));










