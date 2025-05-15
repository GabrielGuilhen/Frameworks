<?php

require_once("Conexao.php");

class CriaClasses2
{
    private $tbBanco = "Tables_in_enderecos";
    private $conn;

    function __construct()
    {
        $this->conn = (new Conexao())->conectar();
    }
    function ClassesModel()
    {
        $sql = "SHOW TABLES";
        $query = $this->conn->query($sql);
        $tabelas = $query->fetchAll(PDO::FETCH_OBJ);

        foreach ($tabelas as $tabela) {
            $nomeTabela = ucfirst($tabela->{$this->tbBanco});
            $conteudo = <<<EOT
            class {$nomeTabela}{

            }
EOT;

            echo "conteudo: <br><pre>$conteudo</pre><br><br>";
        }
    }
}
(new CriaClasses2())->ClassesModel();
