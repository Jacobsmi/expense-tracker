import {getExpenses} from '../../scripts/db'

export default async (req, res) =>{
    const expenses = await getExpenses();
    res.status(200).json({expenses: expenses});
}