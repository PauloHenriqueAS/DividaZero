// import { URL_API_BASE } from './Extensions/constants.js'

function searchAdress() {
  const cep = $("#userCep").val();

  if (cep.length == 8) setAddressAutomatically(cep);
}

function getUserRegistrationFields() {
  return {
    fullName: $("#userFullname").val().trim(),
    email: $("#userEmail").val().trim(),
    citizenship: $("#userCitizenship").val().trim(),
    address: {
      cep: $("#userCep").val().trim(),
      streetName: $("#userStreetName").val().trim(),
      neighborhood: $("#userNeighborhood").val().trim(),
      complement: $("#userComplement").val().trim(),
    },
    houseNumber: $("#userHouseNumber").val(),
    password: $("#userPassword").val().trim(),
    passwordConfirmation: $("#userPasswordConfirmation").val().trim(),
  };
}

function verifyUserRegistrationFields() {
  return new Promise((resolve, reject) => {
    const user = getUserRegistrationFields();
    const areFieldsIncomplete =
      user.fullName == "" ||
      user.email == "" ||
      user.citizenship == "" ||
      user.address.cep == "" ||
      user.address.streetName == "" ||
      user.address.neighborhood == "" ||
      user.address.complement == "" ||
      user.houseNumber == "" ||
      user.password == "" ||
      user.passwordConfirmation == "";

    if (user && user.password != user.passwordConfirmation) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senhas não coincidem!",
      }).then(() => {
        reject("Senhas não coincidem!");
      });
    } else if (areFieldsIncomplete) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Preencha todos os campos!",
      }).then(() => {
        reject("Campos incompletos!");
      });
    } else {
      resolve(user);
    }
  });
}

function setAddressAutomatically(cep) {
  const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(viaCepUrl)
    .then((response) => response.json())
    .then((result) => {
      $("#userStreetName").val(result.logradouro);
      $("#userComplement").val(result.complemento);
      $("#userNeighborhood").val(result.bairro);
    })
    .catch((error) => {
      reject(error);
    });
}

function finishUserRegistration() {
  verifyUserRegistrationFields()
    .then(async (result) => {
      console.log(result);
      if (result) {
        console.log("Chamar api para cadastro");
        try {
          const res = await fetch(`${URL_API_BASE}/user/PostUser`, {
            method: "POST",
            body: result,
          });

          const resData = await res.json();

          console.log(resData);
        } catch (err) {
          console.log(err.message);
        }
      }
    })
    .catch((error) => {
      console.error(`Erros de validação:${error}`);
    });
}
