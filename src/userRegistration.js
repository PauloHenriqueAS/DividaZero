function searchAdress(){
    const cep = $('#userCep').val();

    if (cep.length == 8)
        setAddressAutomatically(cep);
}

function getUserRegistrationFields(){
    return {
        'fullName' : $('#userFullname').val().trim(),
        'email' : $('#userEmail').val().trim(),
        'citizenship' : $('#userCitizenship').val().trim(),
        'address': {
            'cep' : $('#userCep').val().trim(),
            'streetName' : $('#userStreetName').val().trim(),
            'houseNumber' : $('#userHouseNumber').val(),
            'neighborhood' : $('#userNeighborhood').val().trim(),
            'complement' : $('#userComplement').val().trim(),
            'city' : $('#userCity').val().trim(),
            'state' : $('#userState').val().trim(),
        },        
        'password' : $('#userPassword').val().trim(),
        'passwordConfirmation' : $('#userPasswordConfirmation').val().trim(),        
    }
}

function watchPasswordField(){
  const password = $('#userPassword').val().trim();
  const passwordConfirmation = $('#userPasswordConfirmation').val().trim();

  if(password != passwordConfirmation){
    $('#userPasswordConfirmation').css('border-color','#f08080');
    $('#userPassword').css('border-color','#f08080');

    console.log('errado');
  }else{
    $('#userPasswordConfirmation').css('border-color','#dee2e6');
    $('#userPassword').css('border-color','#dee2e6');
  }
}

function verifyUserRegistrationFields() {
    return new Promise((resolve, reject) => {
      const user = getUserRegistrationFields();
      const areFieldsIncomplete =
        user.fullName == '' ||
        user.email == '' ||
        user.citizenship == '' ||
        user.address.cep == '' ||
        user.address.streetName == '' ||
        user.address.neighborhood == '' ||
        user.address.complement == '' ||
        user.address.houseNumber == '' ||
        user.address.city == '' ||
        user.address.state == '' ||
        user.password == '' ||
        user.passwordConfirmation == '';
  
      if (user.password != user.passwordConfirmation) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Senhas não coincidem!',
        }).then(() => {
          reject('Senhas não coincidem!');
        });
      }else if (areFieldsIncomplete) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Preencha todos os campos!',
        }).then(() => {
          reject('Campos incompletos!');
        });
      } else {
        resolve(true);
      }      
    });
}

function setAddressAutomatically(cep){    
    const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`

    fetch(viaCepUrl)
        .then((response) => response.json())
        .then((result) => {
            $('#userStreetName').val(result.logradouro);
            $('#userComplement').val(result.complemento);
            $('#userNeighborhood').val(result.bairro);
            $('#userCity').val(result.localidade);
            $('#userState').val(result.uf);
        })
        .catch((error) => {
            reject(error);
        });
}

function finishUserRegistration() {
    verifyUserRegistrationFields()
        .then((result) => {
            console.log(result)
            if (result) {
            console.log('Chamar api para cadastro');
            }
        })
        .catch((error) => {
            console.error(`Erros de validação:${error}`);
        });
}