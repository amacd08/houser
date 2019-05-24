module.exports = {

    //app.get('/api/houses', controller.getAllHouses)
    getAllHouses: async (req,res) => {
        console.log('hitting get all houses')
        const db = req.app.get('db')
        const result = await db.get_all_houses()
        res.send(result)
    },
    //app.post('/api/houses', controller.addHouse)
    addHouse: async (req,res) => {
        console.log(req.body)
        const {name, address, city, zip, state} = req.body
        const db = req.app.get('db')
        const result = await db.add_house({name, address, city, zip, state})
        res.sendStatus(201)
    },
    deleteHouse: async(req,res) => {
        const id = req.params.id
        const db = req.app.get('db')
        const result = await db.delete_house({id})
        res.send(result)
    }
}