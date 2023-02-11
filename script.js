//começando com entrada de dados
//pegar um documento de acordo com a id dele 
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
//ainda não temos uma lista
var item = document.getElementsByName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    //manipular a var li
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }
   
    //chamar a li, e adcc um evento de click
    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListAferClick);
input.addEventListener("keypress", addListAfterKeypress);

  function addListAferClick(){
    if (inputLength() > 0){
        createListElement();
    }
  }
  
  function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}



