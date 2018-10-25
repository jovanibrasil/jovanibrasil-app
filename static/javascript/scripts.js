

function includeHTML(){

    // Busca todos os elementos com atributo include-html
    const elements = document.querySelectorAll("input[include-html]") 
    
    elements.forEach(x => {

        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
    })


}