$( document ).ready(function() {
    fillTermsDataTable();
});

function verifyRenegociations(){
    window.location.href = 'term.html';
}

function getTermsColumns() {
    return [
        {
            'data': 'num_parcela',
            'title': 'Número de parcelas',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'data_renegociacao',
            'title': 'Data da renegociação',
            'className': 'text-center',
            'render': (data) => {
                return (`${data}`);
            }
        },
        {
            'data': 'codigo_termo',
            'title': 'Códgo do termo',
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
        }
    ];
}

function getTermsByUser(){
    return [
        {
          num_parcela: 1,
          data_renegociacao: '16-09-2023',
          id_divida: 1,
          assinatura_credor: null,
          termo_renegociacao: null,
          id_termo: 1,
          assinatura_devedor: null,
          codigo_termo: 4122132112321,
          status: 1
        },
        {
          num_parcela: 1,
          data_renegociacao: '16-09-2023',
          id_divida: 1,
          assinatura_credor: null,
          termo_renegociacao: null,
          id_termo: 2,
          assinatura_devedor: null,
          codigo_termo: 912132112321,
          status: 2
        },
        {
          num_parcela: 1,
          data_renegociacao: '16-09-2023',
          id_divida: 1,
          assinatura_credor: null,
          termo_renegociacao: null,
          id_termo: 3,
          assinatura_devedor: null,
          codigo_termo: 782132112321,
          status: 1
        },
        {
          num_parcela: 1,
          data_renegociacao: '16-09-2023',
          id_divida: 1,
          assinatura_credor: null,
          termo_renegociacao: null,
          id_termo: 4,
          assinatura_devedor: null,
          codigo_termo: 3111111112321,
          status: 4
        },
        {
          num_parcela: 1,
          data_renegociacao: '16-09-2023',
          id_divida: 1,
          assinatura_credor: null,
          termo_renegociacao: null,
          id_termo: 5,
          assinatura_devedor: null,
          codigo_termo: 223122112321,
          status: 3
        }
      ];
}

function fillTermsDataTable() {
    $('#termsDataTable').DataTable({
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
            $('#termsDataTable_filter label').append('<i class="uil uil-search"></i>');
            $('#termsDataTable_filter label');

            $('#termsDataTable_filter label').addClass('label-table-search');
            $('#termsDataTable_filter label input').addClass('input-table-search');
        },
        data: getTermsByUser(),
        columns: getTermsColumns(),
        createdRow(row, data) {
            $(row).click(function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            });
        },
        columnDefs: [{
            'defaultContent': '-',
            'targets': '_all'
        }],
    });
}

