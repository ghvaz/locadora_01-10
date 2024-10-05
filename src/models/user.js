/*
User{
    name,
    birthday_date,
    email, 
    password,
    permission_type,
    phones,
    addres,
    house_number
}
*/


import bd from "../config/BD.js";
import idade from "../middleware/idade.js";

const SchemaUser = bd.Schema({
    name:{
        type: String,
        required: true
    },
    birthday_date:{
        type: String,
    },
    
    email:{
        type: String,
        required: true,
        unique: true,
        validation: (email) => {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        }
    }, 
    password:{
        type: String,
        required: true
    },
    permission_type:{
        type: String,
        enum: ["user", "adm", "bal"],
    },
    phones:{
        type: String,
        default: "sem telefone"
    },
    addres:{
        type: Object,
        default: {
            cep: "Não informado"
        }
    },
})

const User = bd.model("User", SchemaUser)
export default User