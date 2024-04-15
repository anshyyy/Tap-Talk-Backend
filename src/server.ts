import express from 'express';
import bodyParser from 'body-parser';
import env from './config/serverConfig';


const app = express()
app.use(bodyParser.urlencoded({extended:true}));

(async()=>{
    app.listen(env.PORT,()=>{
        console.log("Server started on port 3000");
    })
})();