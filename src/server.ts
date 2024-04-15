import express from 'express';
import bodyParser from 'body-parser';


const app = express()
app.use(bodyParser.urlencoded({extended:true}));

(async()=>{
    app.listen(3000,()=>{
        console.log("Server started on port 3000");
    })
})();