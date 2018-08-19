function createTable(conn){

        const sql =  "CREATE TABLE IF NOT EXISTS tarefas (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "texto varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";

        conn.query(sql, function (error, results, fields){
                if(error) return console.log(error);
                console.log('criou a tabela');
        });

}

function addRows(conn){
        const sql = "INSERT INTO tarefas(texto) VALUES ?";
        const values = [
                ['teste1'],
                ['teste2'],
                ['teste3']
        ];
        conn.query(sql, [values], function (error, results, fields){
                if(error) return console.log(error);
                console.log('adicionou registros!');
                conn.end();//fecha a conexão
        });
}

const mysql      = require('mysql');
const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : '',
        database : 'todoList'
});

connection.connect(function(err){
        if(err) return console.log(err);
        console.log('conectou!');
        createTable(connection);
        addRows(connection);
})

