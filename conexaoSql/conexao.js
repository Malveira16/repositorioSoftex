const mysql = require('mysql');


const dbConfig = {
  host: 'localhost', 
  user: 'jvm1695', 
  password: 'igores16', 
  database: 'bancoTeste', 
};


const connection = mysql.createConnection(dbConfig);


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados.');
  }
});


connection.end();

