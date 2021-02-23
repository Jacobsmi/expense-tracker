require('dotenv').config('../.env.development.local');
const { Client } = require('pg');

export const insertExpense = async(name, amount) => {
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

export const getExpenses = async () =>{
    // Create a client object
    const client = new Client(process.env.DB_URI);

     // Instantiate a connection also handle conn error
    const connectErr = await client.connect()
        .catch(err => {return 'err'})
    if (connectErr){
        return 'conn-error';
    }

    const dbrResponse = await client.query('SELECT * FROM expenses')
        .catch(err=> {return 'err'})
    if(dbrResponse === 'err'){
        return 'insert-error';
    }
    return dbrResponse.rows;
}