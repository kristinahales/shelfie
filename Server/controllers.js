module.exports = {
    getAll(req, res) {
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        });
    }
}