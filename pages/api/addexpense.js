import {insertExpense} from '../../scripts/db';

export default async(req, res) => {
    // name and amount are verified as valid on client side
    const insertStatus = await insertExpense(req.body.name, req.body.amount);
    if (insertStatus === 'success'){
        res.json({status: 'success'})
    }else if(insertStatus === 'conn-error'){
        res.json({status: 'conn-error'})
    }else if(insertStatus === 'insert-error'){
        res.json({status: 'insert-error'})
    }
}