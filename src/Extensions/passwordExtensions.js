function watchPasswordField(passwordId, confirmationPasswordId){
    const password = $(`#${passwordId}`).val().trim();
    const passwordConfirmation = $(`#${confirmationPasswordId}`).val().trim();
  
    if(password != passwordConfirmation){
      $(`#${confirmationPasswordId}`).css('border-color','#f08080');
      $(`#${passwordId}`).css('border-color','#f08080');
    }else{
      $(`#${confirmationPasswordId}`).css('border-color','#dee2e6');
      $(`#${passwordId}`).css('border-color','#dee2e6');
    }
  }