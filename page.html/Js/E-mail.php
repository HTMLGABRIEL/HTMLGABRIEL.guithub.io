<!-- <?php

    $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
    if(empty($dados['nome'])){
        $retorna = ['status'=> false, 'msg' => "Erro: Necessário preencher o campo nome!"];
    }else{
        $retorna = ['status'=> true, 'msg' => "Email enviado com sucesso!"];
    }

    echo json_encode($retorna);
    -->