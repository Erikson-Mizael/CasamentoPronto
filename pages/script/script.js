$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function (event) {
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
    const atualizar = setInterval(refresh, 1000);
});
function refresh(){
    getCozinha();
    getSala();
    getQuarto();
    getBanheiro();
    getLavanderia();
    console.log('Renderizado')
}


async function enviar(e, pai) {
    switch (pai) {
        case 'cozinha':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-cozinha/'+e,
                data: { 'escolhido': 'true' },
                success: function (response) {
                    console.log(response);
                }
            });
            getCozinha();
            break;
        case 'sala':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-sala/'+e,
                data: { 'escolhido': 'true' },
                success: function (response) {
                    console.log(response);
                }
            });
            getSala();
            break;
        case 'quarto':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-quarto/'+e,
                data: { 'escolhido': 'true' },
                success: function (response) {
                    console.log(response);
                }
            });
            getQuarto();
            break;
        case 'banheiro':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-banheiro/'+e,
                data: { 'escolhido': 'true' },
                success: function (response) {
                    console.log(response);
                }
            });
            getBanheiro();
            break;
        case 'lavanderia':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-lavanderia/'+e,
                data: { 'escolhido': 'true' },
                success: function (response) {
                    console.log(response);
                }
            });
            getLavanderia();
            break;
        default:
            console.log('Passou direto switch')
            break;
    }
    
}
function getCozinha() {
    fetch('http://177.92.135.112:3000/api/lista-cozinha/')
        .then(data => data.json())
        .then(response => cozinha(response.Dados))
}
function getSala() {
    fetch('http://177.92.135.112:3000/api/lista-sala/')
        .then(data => data.json())
        .then(response => sala(response.Dados))
}
function getQuarto() {
    fetch('http://177.92.135.112:3000/api/lista-quarto/')
        .then(data => data.json())
        .then(response => quarto(response.Dados))
}
function getBanheiro() {
    fetch('http://177.92.135.112:3000/api/lista-banheiro/')
        .then(data => data.json())
        .then(response => banheiro(response.Dados))
}
function getLavanderia() {
    fetch('http://177.92.135.112:3000/api/lista-lavanderia/')
        .then(data => data.json())
        .then(response => lavanderia(response.Dados))
}
function cozinha(data) {
    $("#lista-cozinha").html("");
    data.forEach(element => {
        $('#lista-cozinha').append(`<a onclick="enviar(${element.id}, 'cozinha')"; class="list-group-item">${element.presente}
            <div id='icon-cozinha' style='float:right'>
                ${returnEscolhido(element.escolhido)}
            </div>
        </a>`);
    });
    function returnEscolhido(escolhido) {
        if (escolhido == 'true') {
            return '<button type="button" class="btn btn-success" style="margin-top:-8px"> <span class="glyphicon glyphicon-ok"> Escolhido </span> </button>';
        } 
        return '<button type="button" class="btn btn-info" style="margin-top:-8px" > <span class="glyphicon glyphicon-gift"> Adicionar </span> </button>';                
    }
}
function sala(data) {
    $("#lista-sala").html("");
    data.forEach(element => {
        $('#lista-sala').append(`<a onclick="enviar(${element.id}, 'sala')"; class="list-group-item">${element.presente}
            <div id='icon-sala' style='float:right'>
                ${returnEscolhido(element.escolhido)}
            </div>
        </a>`);
    });
    function returnEscolhido(escolhido) {
        if (escolhido == 'true') {
            return '<button type="button" class="btn btn-success" style="margin-top:-8px"> <span class="glyphicon glyphicon-ok"> Escolhido </span> </button>';
        } 
        return '<button type="button" class="btn btn-info" style="margin-top:-8px" > <span class="glyphicon glyphicon-gift"> Adicionar </span> </button>';                
    }
}
function quarto(data) {
    $("#lista-quarto").html("");
    data.forEach(element => {
        $('#lista-quarto').append(`<a onclick="enviar(${element.id}, 'quarto')"; class="list-group-item">${element.presente}
            <div id='icon-quarto' style='float:right'>
                ${returnEscolhido(element.escolhido)}
            </div>
        </a>`);
    });
    function returnEscolhido(escolhido) {
        if (escolhido == 'true') {
            return '<button type="button" class="btn btn-success" style="margin-top:-8px"> <span class="glyphicon glyphicon-ok"> Escolhido </span> </button>';
        } 
        return '<button type="button" class="btn btn-info" style="margin-top:-8px" > <span class="glyphicon glyphicon-gift"> Adicionar </span> </button>';                
    }
}
function banheiro(data) {
    $("#lista-banheiro").html("");
    data.forEach(element => {
        $('#lista-banheiro').append(`<a onclick="enviar(${element.id}, 'banheiro')"; class="list-group-item">${element.presente}
            <div id='icon-banheiro' style='float:right'>
                ${returnEscolhido(element.escolhido)}
            </div>
        </a>`);
    });
    function returnEscolhido(escolhido) {
        if (escolhido == 'true') {
            return '<button type="button" class="btn btn-success" style="margin-top:-8px"> <span class="glyphicon glyphicon-ok"> Escolhido </span> </button>';
        } 
        return '<button type="button" class="btn btn-info" style="margin-top:-8px" > <span class="glyphicon glyphicon-gift"> Adicionar </span> </button>';                
    }
}
function lavanderia(data) {
    $("#lista-lavanderia").html("");
    data.forEach(element => {
        $('#lista-lavanderia').append(`<a onclick="enviar(${element.id}, 'lavanderia')"; class="list-group-item">${element.presente}
            <div id='icon-lavanderia' style='float:right'>
                ${returnEscolhido(element.escolhido)}
            </div>
        </a>`);
    });
    function returnEscolhido(escolhido) {
        if (escolhido == 'true') {
            return '<button type="button" class="btn btn-success" style="margin-top:-8px"> <span class="glyphicon glyphicon-ok"> Escolhido </span> </button>';
        } 
        return '<button type="button" class="btn btn-info" style="margin-top:-8px" > <span class="glyphicon glyphicon-gift"> Adicionar </span> </button>';                
    }
}