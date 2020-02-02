const mongoose = require ('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema(
    {
        username: {type: String , unique: true},
        password: {type: String , unique: true},
        campus:  {type: String , enum : ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']},
        course: {type: String , enum : ['WebDev', 'UX/UI', 'Data Analytics']},
        image: String
    },
    {
        timestamps:true,
    }
);

const User = model('user', userSchema);

module.exports = User;