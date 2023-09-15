const getUserLoginFields = () => {
  return {
    email: $("#userEmailLogin").val().trim(),
    password: $("#userPasswordLogin").val().trim(),
  };
};

const verifyUserLoginFields = () => {
  return new Promise((resolve, reject) => {
    const user = getUserLoginFields();
    if (user && user.password && user.password.length > 0) {
      resolve(user);
    }
    reject("Sua senha está incorreta!");
  });
};

const handleSubmit = () => {
  verifyUserLoginFields()
    .then(async (result) => {
      if (result) {
        console.log("Chamar API para login de usuario");
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
