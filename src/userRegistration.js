function searchAdress() {
  const cep = $("#userCep")
    .val()
    .trim()
    .replaceAll("-", "")
    .replaceAll(".", "");

  if (cep.length == 8) setAddressAutomatically(cep);
}

function getUserRegistrationFields() {
  return {
    user: {
      full_name: $("#userFullname").val().trim(),
      email_user: $("#userEmail").val().trim(),
      citizenship: $("#userCitizenship").val().trim(),
      password_user: $("#userPassword").val().trim(),
      passwordConfirmation: $("#userPasswordConfirmation").val().trim(),
    },
    endereco: {
      cep: $("#userCep").val().trim(),
      logradouro: $("#userStreetName").val().trim(),
      numero: $("#userHouseNumber").val(),
      bairro: $("#userNeighborhood").val().trim(),
      complemento: $("#userComplement").val().trim(),
      cidade: $("#userCity").val().trim(),
      estado: $("#userState").val().trim(),
    },
  };
}

function verifyUserRegistrationFields() {
  return new Promise((resolve, reject) => {
    const data = getUserRegistrationFields();
    const areFieldsIncomplete =
      data.user.full_name == "" ||
      data.user.email == "" ||
      data.user.citizenship == "" ||
      data.endereco.cep == "" ||
      data.endereco.logradouro == "" ||
      data.endereco.bairro == "" ||
      data.endereco.complemento == "" ||
      data.endereco.numero == "" ||
      data.user.password_user == "" ||
      data.user.passwordConfirmation == "";

    if (data && data.user.password_user != data.user.passwordConfirmation) {
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
      const newData = { ...data };
      delete newData.user.passwordConfirmation;
      resolve(newData);
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
      $("#userCity").val(result.localidade);
      $("#userState").val(result.uf);
    })
    .catch((error) => {
      reject(error);
    });
}

function finishUserRegistration() {
  verifyUserRegistrationFields()
    .then(async (result) => {
      if (result) {
        try {
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
          };

          const res = await fetch(
            `${URL_API_BASE}/user/PostUser`,
            requestOptions
          );

          const resData = await res.json();

          if (resData && resData.code === 201) {
            Swal.fire({
              icon: "success",
              title: "Sucesso",
              text: resData.mensagem,
            });
          }else{
            Swal.fire({
              icon: "error",
              title: "Ops...",
              text: resData.mensagem,
            });
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    })
    .catch((error) => {
      console.error(`Erros de validação:${error}`);
    });
}
