let state = false
let state2 = false
let form = null

const handleShowModal = (contestar = false) => {
    if(!state2){
        if(!state){
            $('#modalContestar').modal('show')
            state = !state
        }
        $('#modalContestar').modal('hide')
        state = !state
        if(contestar){
            handleModalInput()
        }
    }
}

const handleModalInput = (closed = false) => {
    if(!state2){
        $('#modalSend').modal('show')
        form = document.getElementById('post-file')
        state2 = !state2
    }
    $('#modalSend').modal('hide')
    state = true
    if(!closed){
        // reset all states
        state = false
        state2 = false
    }else{
        document.getElementById('btn-modal').disabled = true
    }
    
}

const handleSubmit = (data) => {
    console.log(data)
}

// insert htmlModal hore
let htmlModal = `<div class="modal fade" id="modalContestar" tabindex="-1" role="dialog" aria-labelledby="modalContestarLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modalContestarLabel">Contestar</h5>
    </div>
    <div class="modal-body">
        <form class="formLogin">
            <div class="mb-3">
                <div class="row">
                    <div class="col-md-6"><i class="icon ion-person" style="padding-right: 7px;"></i><label class="form-label" for="num_contrato">Número do Contrato</label><input disabled class="form-control" type="text" id="num_contrato"></div>
                    <div class="col-md-6"><i class="icon ion-email" style="padding-right: 7px;"></i><label class="form-label" for="id_devedor">ID Devedor</label><input disabled class="form-control" type="text" id="id_devedor"></div>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-md-6"><i class="icon ion-person" style="padding-right: 7px;"></i><label class="form-label" for="montante_atrasado">Montante Atrasado</label><input disabled class="form-control" type="text" id="montante_atrasado"></div>
                    <div class="col-md-6"><i class="icon ion-email" style="padding-right: 7px;"></i><label class="form-label" for="montante_valor">Montante Valor</label><input disabled class="form-control" type="text" id="montante_valor"></div>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-md-6"><i class="icon ion-person" style="padding-right: 7px;"></i><label class="form-label" for="data_divida">Data Dívida</label><input disabled class="form-control" type="text" id="data_divida"></div>
                    <div class="col-md-6"><i class="icon ion-email" style="padding-right: 7px;"></i><label class="form-label" for="status">Status</label><input disabled class="form-control" type="text" id="status"></div>
                </div>
                    <div class="col-md-6 mx-auto"><i class="icon ion-email" style="padding-right: 7px;"></i><label class="form-label text-center" for="termo_divida">Termo Dívida</label><input disabled class="form-control" type="text" id="termo_divida"></div>
            </div> 
        </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="handleShowModal(true)" data-target="#modalContestar">Contestar</button>
      <button type="button" class="btn btn-primary" onclick="handleShowModal()" data-target="#modalContestar">Fechar</button>
    </div>
  </div>
</div>
</div>`

let htmlInput = `
<div class="modal fade" id="modalSend" tabindex="-1" role="dialog" aria-labelledby="modalSendLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modalSendLabel">Carregue o Termo</h5>
    </div>
    <div class="modal-body">
        <div class="file-upload-wrapper" id="drop-zone">
            <form method="post" id="post-file">
                <label for="fileInput" class="label-file">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> 
                    <span>Carregue seu arquivo aqui!</span>
                    <input type="file" id="formFile" class="file-upload"
                    data-height="500" />
                </label>
            </form>
        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" onclick="handleModalInput(true)" data-target="#modalSend">Enviar</button>
    </div>
  </div>
</div>
</div>
`

const handleRenderModal = () => {
    $('#modalArea').append(htmlModal)
    $('#modalInputArea').append(htmlInput)
}
