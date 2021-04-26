import mongoose from 'mongoose'

const atlas = `mongodb+srv://jonathanaguilera2021:1010*@cluster0.nayfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const ipconnect = 'mongodb://localhost/nombreBD'

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error ===========>', err)
    })

