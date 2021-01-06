var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./Data/lista.sqlite"

const sala = ['Tapetes', 'Tv', 'Abajur']
const quarto = ['Jogo de lençol', 'Edredom', 'coberta leve', 'Ventilador','Sapateira ']
const cozinha = ['Faqueiro', 'Jogo de prato', 'Jogo de copos', 'Jogo de  taças', 'Taças de sobremesa',
    'Frigideira (antiaderente)', 'Jogo de panela', 'Assadeira', 'Garrafa térmica', 'Travessas de vidro', 
    'Jarra','Liquidificador (pref.vermelho)', 'Talheres específicos',
    'Misteira', 'Amassador de alho', 'Fruteira', 'Jogo de xícara', 'Micro-ondas', 'Panela elétrica de arroz' ]
const banheiro = ['Jogo de toalhas', 'Tapetes']
const lavanderia = ['Tábua de passar roupa', 'Máquina de lavar roupa']

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{
        console.log('Conectado com o banco de dados. cozinha')
        //cozinha
        db.run(`CREATE TABLE cozinha (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            presente text UNIQUE, 
            escolhido text, 
            CONSTRAINT presente_unique UNIQUE (presente)
            )`,
        (err) => {
            if (err) {
                console.log('Tabela encontrada LISTA-COZINHA');
            }else{
                // Table just created, creating some rows
                console.log('Tabela recem criada, adicionando lista-cozinha');
                var insert = 'INSERT INTO cozinha (presente, escolhido) VALUES (?,?)';
                for (let i = 0; i < cozinha.length; i++) {
                    db.run(insert, [cozinha[i], 'false'])
                }
            }
        });  

        console.log('Conectado com o banco de dados. SALA')
        //sala
        db.run(`CREATE TABLE sala (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            presente text UNIQUE, 
            escolhido text, 
            CONSTRAINT presente_unique UNIQUE (presente)
            )`,
        (err) => {
            if (err) {
                console.log('Tabela encontrada LISTA-SALA');
            }else{
                // Table just created, creating some rows
                console.log('Tabela recem criada, adicionando lista');
                var insert = 'INSERT INTO sala (presente, escolhido) VALUES (?,?)';
                for (let i = 0; i < sala.length; i++) {
                    db.run(insert, [sala[i], 'false'])
                }
            }
        });

        console.log('Conectado com o banco de dados. QUARTO')
        //quarto
        db.run(`CREATE TABLE quarto (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            presente text UNIQUE, 
            escolhido text, 
            CONSTRAINT presente_unique UNIQUE (presente)
            )`,
        (err) => {
            if (err) {
                console.log('Tabela encontrada LISTA-QUARTO');
            }else{
                // Table just created, creating some rows
                console.log('Tabela recem criada, adicionando lista');
                var insert = 'INSERT INTO quarto (presente, escolhido) VALUES (?,?)';
                for (let i = 0; i < quarto.length; i++) {
                    db.run(insert, [quarto[i], 'false'])
                }
            }
        });

        console.log('Conectado com o banco de dados. BANHEIRO')
        //banheiro
        db.run(`CREATE TABLE banheiro (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            presente text UNIQUE, 
            escolhido text, 
            CONSTRAINT presente_unique UNIQUE (presente)
            )`,
        (err) => {
            if (err) {
                console.log('Tabela encontrada LISTA-BANHEIRO');
            }else{
                // Table just created, creating some rows
                console.log('Tabela recem criada, adicionando lista');
                var insert = 'INSERT INTO banheiro (presente, escolhido) VALUES (?,?)';
                for (let i = 0; i < banheiro.length; i++) {
                    db.run(insert, [banheiro[i], 'false'])
                }
            }
        });


        console.log('Conectado com o banco de dados. LAVANDERIA')
        //lavanderia
        db.run(`CREATE TABLE lavanderia (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            presente text UNIQUE, 
            escolhido text, 
            CONSTRAINT presente_unique UNIQUE (presente)
            )`,
        (err) => {
            if (err) {
                console.log('Tabela encontrada LISTA-LAVANDERIA');
            }else{
                // Table just created, creating some rows
                console.log('Tabela recem criada, adicionando lista');
                var insert = 'INSERT INTO lavanderia (presente, escolhido) VALUES (?,?)';
                for (let i = 0; i < lavanderia.length; i++) {
                    db.run(insert, [lavanderia[i], 'false'])
                }
            }
        });


        
    }
});

module.exports = db