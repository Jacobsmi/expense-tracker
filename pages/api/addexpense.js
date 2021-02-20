export default (req, res) => {
    console.log(req.body.name);
    console.log(req.body.amount);
    res.status(200).json({status: 'success'})
}