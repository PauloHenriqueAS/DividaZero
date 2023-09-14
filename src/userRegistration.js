// import { URL_API_BASE } from './Extensions/constants.js'

function searchAdress(){
    const cep = $('#userCep').val();

    if (cep.length == 8)
        setAddressAutomatically(cep);
}

function setAddressAutomatically(cep){
    const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`

    fetch(viaCepUrl)
        .then((response) => response.json())
        .then((result) => {
            $('#streetName').val(result.logradouro);
            $('#complement').val(result.complemento);
            $('#neighborhood').val(result.bairro);
        })
        .catch((error) => {
            reject(error);
        });
}