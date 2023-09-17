const selectPaymentMethod = () => {
  if(document.getElementById('formaPagamento').options[2].value == document.getElementById('formaPagamento').value){
    $('#contestModal').modal('show');
    $('#paymentPortian').removeClass('d-none');
  }else{
    $('#paymentPortian').addClass('d-none');
  }
} 

async function generateRenegotiation(){
    const body = {
        "termo": {
          "id_termo": 37,
          "id_divida": 1,
          "num_parcela": 1,
          "data_renegociacao": "2023-09-17"
        },
        "parcelas": {
          "valor": 2500.00,
          "qtd": 1
        }
      };

    let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const res = await fetch(`${URL_API_BASE}/term/PostTerm`, requestOptions);
      const blob = await res.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Termo.pdf';
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Termo gerado com sucesso!",
      }).then(() =>{window.location.reload()})
}