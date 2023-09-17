document.querySelector("#card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector("#card-number-input").value || "################";
};

document.querySelector("#card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector("#card-holder-input").value || "Fulano de tal";
};

document.querySelector("#month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector("#month-input").value;
};

document.querySelector("#year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector("#year-input").value;
};

document.querySelector("#cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector("#cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector("#cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector("#cvv-input").value || "000";
};

document
  .getElementById("formaPagamento")
  .addEventListener("change", function () {
    var formaPagamento = document.getElementById("formaPagamento").value;
    var cartaoFields = document.getElementById("cartaoFields");
    var pixFields = document.getElementById("pixFields");
    var boletoFields = document.getElementById("boletoFields");

    cartaoFields.style.display = "none";
    pixFields.style.display = "none";
    boletoFields.style.display = "none";

    if (formaPagamento === "cartao") {
      cartaoFields.style.display = "block";
      pixFields.style.display = "none";
      boletoFields.style.display = "none";
    } else if (formaPagamento === "pix") {
      cartaoFields.style.display = "none";
      pixFields.style.display = "block";
      boletoFields.style.display = "none";
      var chavePix = `ef2faf7b5ad8ddc7c137ee95696e1ceed4733d8acb4aba2b235b7f0ec31ab3b134003aaf6245df5622342b5b6346bfe114cc1ba57600bb95530984ebfea5644497efe08c3e991c33f9e392393c1481b5a52dc37335e98b2271778754b4f7d5a2`;
      document.getElementById("chavePix").value = chavePix;
    } else if (formaPagamento === "boleto") {
      cartaoFields.style.display = "none";
      pixFields.style.display = "none";
      boletoFields.style.display = "block";
      document.getElementById("codigoBarras").value = `1000000 1000001 1000002`
    }
  });



function openPaymentTypes()
{
  window.location.href = 'pagamento.html';
}

async function payDebt(){
   const body = {
      "termo": {
        "id_termo": 50,
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
      text: "Pagamento realizado com sucesso!",
    }).then(() =>{window.location.href = "./index.html"})
}