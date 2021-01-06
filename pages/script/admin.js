function mudar(){
    let id = document.getElementById('id').value
    let lista = document.getElementById('presente').value

    enviar(id, lista)

}


async function enviar(e, pai) {
    switch (pai) {
        case 'cozinha':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-cozinha/'+e,
                data: { 'escolhido': 'false' },
                success: function (response) {
                    console.log(response);
                }
            });
            break;
        case 'sala':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-sala/'+e,
                data: { 'escolhido': 'false' },
                success: function (response) {
                    console.log(response);
                }
            });
            break;
        case 'quarto':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-quarto/'+e,
                data: { 'escolhido': 'false' },
                success: function (response) {
                    console.log(response);
                }
            });
            break;
        case 'banheiro':
            await $.ajax({
                type: "PATCH",
                url: 'http://177.92.135.112:3000/api/atualizar-banheiro/'+e,
                data: { 'escolhido': 'false' },
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
                data: { 'escolhido': 'false' },
                success: function (response) {
                    console.log(response);
                }
            });
            break;
        default:
            console.log('Passou direto switch')
            break;
    }
    
}