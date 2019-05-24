module.exports = {

    //app.get('/api/houses', controller.getAllHouses)
    getAllHouses: async (req,res) => {
        const db = req.app.get('db')
        const result = await db.get_all_houses()
        res.send(result)
    }
}