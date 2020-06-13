import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
  });

/*   Usando o MySQL
const connection = knex({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    database : 'nlw',
    user : 'root',
    password : 'root'
  },
  useNullAsDefault: true,
});
*/

export default connection;