module.exports = {
    getAll(req, res) {
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        });
    },
    create(req, res) {
        const db = req.app.get('db');
        const {image_url, product, price} = req.body;

        db.create_product([image_url, product, price])
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        });
    },
    delete(req, res) {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    
    }
}