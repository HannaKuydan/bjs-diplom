const userForm = new UserForm();
userForm.loginFormCallback = (data) =>
  ApiConnector.login(data, (y) => {
    if (y.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(y.error);
    }
  });

userForm.registerFormCallback = (registrationData) =>
  ApiConnector.register(registrationData, (response) => {
    if (response.success) {
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(response.error);
    }
  });
