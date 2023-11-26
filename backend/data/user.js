import bcrypt from 'bcryptjs';


const users = [
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'john',
        email:'john@gmail.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:false
    },
    {
        name:'janer',
        email:'janer@gmail.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:false
    }
]

export default users