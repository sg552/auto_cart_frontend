      var db = openDatabase('auto_cart', '1.0', 'db of auto_cart', 2 * 1024 * 1024)
      db.transaction(function(tx){
        tx.executeSql('create table if not exists conditions(id unique, text)');
        tx.executeSql('insert into conditions(id ,text) values (1, "cpu condition")');
        tx.executeSql('insert into conditions(id ,text) values (2, "memory condition")');
      });

      db.transaction(function(tx){
        tx.executeSql('select * from conditions', [], function(tx, results){
          var len = results.rows.length, i;
          for (i = 0; i< len; i++){
            console.info(results.rows.item(i).text);
          }
        });
      });

