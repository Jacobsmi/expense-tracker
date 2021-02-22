require('dotenv').config('../.env.development.local');
const { Client } = require('pg');


/* 
TO DO:
- Ensure proper return values with certain outcomes
*/
export const queryTable = async(name, amount) => {
    // Create a client object
    const client = new Client(process.env.DB_URI);
    
    // Instantiate a connection also handle conn error
    const connectErr = await client.connect()
        .catch(err => {return 'err'})
    if (connectErr){
        return 'conn-error';
    }
    // Create a parameterized statement and execute the query and handle error
    const insert = `INSERT INTO expenses(name, amount) VALUES($1, $2);`
    const dbrResponse = await client.query(insert, [name, amount])
        .catch(err=> {return 'err'})
    if(dbrResponse === 'err'){
        return 'insert-error';
    }
    return 'success';
}