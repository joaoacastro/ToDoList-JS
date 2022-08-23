var lista = [];

function addItem(){

    var item = document.getElementById("item").value;
    var itemLista = document.getElementById("lista");
    var botaoDel = '<button class="btnDelItem" id="btnDelItem" onclick="delItem()">X</button>';
    
    var item = document.getElementById("item").value;
    
    if (!item){
        alert("Ops, parece que faltou algo. 🤔 \n Por gentileza, preencha informe o nome do ítem!")
    } else {    
        lista.push(item);

        itemLista.innerHTML += '<li id="listaHTML"><input type="checkbox" id="itemLista" class="itemLista"><label> ' + item + '</label>' +  botaoDel + '</li>';

        document.getElementById("item").value = '';
        document.getElementById("item").focus();

        console.log(lista) 
    }
}
function delItem(){
    var item = document.getElementById("item").value;
    var itemListaHTML = document.getElementById("listaHTML");

    if (item = itemListaHTML){
        itemListaHTML.remove();
    } else {

    }

    lista.pop(item);

    console.log(lista)  
}

addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addItem();
    };
});