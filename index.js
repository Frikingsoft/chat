import { servidor } from './config.js'
import { autenticar } from './controladores/autenticar.js'
import  "./controladores/conexionlaravel.js"
servidor.get('/', (req,res)=>{
    res.status(200).send('ok')
})
servidor.post("/login",autenticar,(req,res)=>{
    console.log(req.body)
    res.status(200).send('Autenticación exitosa');
})
