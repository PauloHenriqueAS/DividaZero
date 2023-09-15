function searchCompanyAdress() {
  const cep = $("#companyCep")
    .val()
    .trim()
    .replaceAll("-", "")
    .replaceAll(".", "");

  if (cep.length == 8) setCompanyAddressAutomatically(cep);
}

function getCompanyRegistrationFields() {
  return {
    fullName: $("#companyName").val().trim(),
    email: $("#companyEmail").val().trim(),
    cnpj: $("#companyCnpj").val().trim(),
    phoneNumber: $("#companyPhoneNumber").val().trim(),
    address: {
      cep: $("#companyCep").val().trim(),
      streetName: $("#companyStreetName").val().trim(),
      houseNumber: $("#companyHouseNumber").val(),
      neighborhood: $("#companyNeighborhood").val().trim(),
      complement: $("#companyComplement").val().trim(),
      city: $("#companyCity").val().trim(),
      state: $("#companyState").val().trim(),
    },
    password: $("#companyPassword").val().trim(),
    passwordConfirmation: $("#companyPasswordConfirmation").val().trim(),
  };
}

function verifyCompanyRegistrationFields() {
  return new Promise((resolve, reject) => {
    const company = getCompanyRegistrationFields();
    const areFieldsIncomplete =
      company.fullName == "" ||
      company.email == "" ||
      company.cnpj == "" ||
      company.phoneNumber == "" ||
      company.address.cep == "" ||
      company.address.streetName == "" ||
      company.address.neighborhood == "" ||
      company.address.complement == "" ||
      company.address.houseNumber == "" ||
      company.address.city == "" ||
      company.address.state == "" ||
      company.password == "" ||
      company.passwordConfirmation == "";

    if (company && company.password != company.passwordConfirmation) {
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
      resolve(company);
    }
  });
}

function setCompanyAddressAutomatically(cep) {
  const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(viaCepUrl)
    .then((response) => response.json())
    .then((result) => {
      $("#companyStreetName").val(result.logradouro);
      $("#companyComplement").val(result.complemento);
      $("#companyNeighborhood").val(result.bairro);
      $("#companyCity").val(result.localidade);
      $("#companyState").val(result.uf);
    })
    .catch((error) => {
      reject(error);
    });
}

function finishCompanyRegistration() {
  verifyCompanyRegistrationFields()
    .then(async (result) => {
      if (result) {
        try {
          const res = await fetch(`${URL_API_BASE}/lender/PostLender`, {
            method: "POST",
            body: result,
          });

          const resData = await res.json();

          console.log(resData);
        } catch (err) {
          console.log(err.message);
        }
        console.log("Chamar api para cadastro de empresa");
      }
    })
    .catch((error) => {
      console.error(`Erros de validação:${error}`);
    });
}
