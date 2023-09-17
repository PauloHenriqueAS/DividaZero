$( document ).ready(function() {
    validateUserToken();
});

function verifyDebts(){
    window.location.href = 'debt.html?token=61c56747b6b25e17f28d62aa3e4bf32b731ef14f062cee7a8106c09767e92017';
}

function renegociateDebts(){
    window.location.href = "form_term.html"
}

function isTokenValid(cpfUser, userToken){
    // TODO - consumir api e verificar

    return true;
}

function validateUserToken(){
    // const token = $('#validationUserToken').val().trim();
    // const cpf = $('#validationUserCpf').val().trim();
    const token = '';
    const cpf = '';

    if(isTokenValid(cpf, token))
    {
        $('#userTokenInformations').remove();
        fillDebtsDataTable(cpf);
    }
}

function getDebtsColumns() {
    return [
        {
            'data': '',
            'title': ' ',
            'className': 'd-none',
            'render': (data,type, row) => {
                const contractNumber = row['num_contrato'];
                return `<input class="form-check-input" type="checkbox" name="teste" value="1" id="debtCheckbox_${contractNumber}" onclick=checkContract(${contractNumber})>`
            }
        },
        {
            'data': 'num_contrato',
            'title': 'Número do contrato',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'data_divida',
            'title': 'Data da dívida',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'montante_valor',
            'title': 'Montante valor',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'montante_atrasado',
            'title': 'Montante atrasado',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'produto',
            'title': 'Produto',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'status',
            'title': 'Status',
            'className': 'text-center',
            'render': (data) => {
                if(data == '1'){
                    return `<div style="background-color:#F08080;" class="rounded">Fechado</div>`
                }else if(data == '2'){
                    return `<div style="background-color:#98FB98;" class="rounded">Aberto</div>`
                }else if(data == '3'){
                    return `<div style="background-color:#B0C4DE;" class="rounded">Renegociada</div>`
                }else{
                    return `<div style="background-color:#F4A460;" class="rounded">Contestada</div>`
                }
            }
        },
        {
            'data': '',
            'title': ' ',
            'className': 'text-center',
            'render': (data) => {
                return `<i class="fa fa-ellipsis-v" aria-hidden="true" style="font-size: 30px; cursor: pointer;" title="Contestar dívida" onclick="openContestModal()"></i>`
            }
        }
    ];
}

function getDebtsByUser(userCpf){
    return [{
        id_divida: 1,
        id_credor: '123',
        id_devedor: '456',
        num_contrato: '3127313921',
        termo_divida: 'Termo 1',
        data_divida: '2023-09-16',
        montante_valor: 2500.00,
        montante_atrasado: 1500.00,
        status: '1',
        produto: 'Internet'
      },
      {
        id_divida: 2,
        id_credor: '789',
        id_devedor: '101',
        num_contrato: '3127171321',
        termo_divida: ' Termo 2',
        data_divida: '2023-09-17',
        montante_valor: 800.25,
        montante_atrasado: 100.00,
        status: '2',
        produto: 'ProdutoABC'
      },
      {
        id_divida: 3,
        id_credor: '121',
        id_devedor: '131',
        num_contrato: '3124731322',
        termo_divida: 'Termo 3',
        data_divida: '2023-09-17',
        montante_valor: 800.25,
        montante_atrasado: 100.00,
        status: '3',
        produto: 'Produto123'
      },
      {
        id_divida: 4,
        id_credor: '121',
        id_devedor: '131',
        num_contrato: '3125731322',
        termo_divida: 'Termo 3',
        data_divida: '2023-09-17',
        montante_valor: 800.25,
        montante_atrasado: 100.00,
        status: '4',
        produto: 'Produto123'
      }
    ]
}

function fillDebtsDataTable(userCpf) {
    $('#debtsDataTable').DataTable({
        dom: '<"table-top"fB>rt<"table-bottom"lp>',
        scrollX: true,
        responsive: true,
        buttons: [
            {
                extend: 'excel',
                // text: '<img class="excel-icon">',
                titleAttr: 'Exportar para excel'
            }
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json',
            search: '',
            searchPlaceholder: 'Buscar',
            lengthMenu: 'Mostrar _MENU_ resultados',
            zeroRecords: 'Nenhum Resultado encontrado!',
            info: 'Página _PAGE_ de _PAGES_',
            infoEmpty: 'Nenhum dado válido',
            infoFiltered: '(Filtrado de _MAX_ resultados)',
        },
        initComplete: function () {
            $('#debtsDataTable_filter label').append('<i class="uil uil-search"></i>');
            $('#debtsDataTable_filter label');

            $('#debtsDataTable_filter label').addClass('label-table-search');
            $('#debtsDataTable_filter label input').addClass('input-table-search');
        },
        data: getDebtsByUser(userCpf),
        columns: getDebtsColumns(),
        createdRow(row, data) {
            $(row).click(function (evt) {
                evt.preventDefault();
                evt.stopPropagation();

                $(`#debtCheckbox_${data.num_contrato}`).parent().parent().css('background-color', '#E3F4F4');
            });
            

            $(row).hover(
                function () { $(this).css('cursor', 'pointer'); },
            );
        },
        columnDefs: [{
            'defaultContent': '-',
            'targets': '_all'
        }],
    });
}

function checkContract(contractNumber){
    $(`#debtCheckbox_${contractNumber}`).parent().parent().css('background-color', '#E3F4F4');
    console.log(`#debtCheckbox_${contractNumber}`)
}