var mysql = require('../base/mysql.js')

function save(word,semantics,symbols,type){
    const sql = "insert into word(word,semantics,type,symbols) values(?,?,?,?)"
    var addSqlParams = [word, semantics,type, symbols];

    mysql.insert(sql,addSqlParams);
}

function getWords(){
    const sql = "select * from word";

    mysql.select(sql);
}

module.exports = {
    save,
    getWords
}