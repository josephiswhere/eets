const { Pool } = require('pg');

const PG_URI = `postgres://ofcynofb:5hmBzP_Yox-Dl1fltlJVXTqkgEC5c7y3@ziggy.db.elephantsql.com:5432/ofcynofb`

const pool = new Pool({
    connectionString: PG_URI
})

module.export = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};