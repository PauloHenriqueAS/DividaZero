const getUserLoginFields = () => {
  return {
    email_user: $("#userEmailLogin").val().trim(),
    password_user: $("#userPasswordLogin").val().trim(),
  };
};

const verifyUserLoginFields = () => {
  return new Promise((resolve, reject) => {
    const user = getUserLoginFields();
    if (user && user.password_user && user.password_user.length > 0) {
      resolve(user);
    }
    reject("Sua senha está incorreta!");
  });
};

const handleSubmit = () => {
  verifyUserLoginFields()
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
          const res = await fetch(`${URL_API_BASE}/user/login`, requestOptions);

          const resData = await res.json();
          if(resData && resData.code === 200){
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
          console.log(resData);
        } catch (err) {
          console.log(err.message);
        }
      }
    })
    .catch((error) => {
      console.log(`Erros de validação:${error}`);
    });
};
