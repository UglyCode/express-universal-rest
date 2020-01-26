const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use('/static',express.static(__dirname + '/public'));
app.use(bp.json());

app.get('/', (req, res)=>{

});

app.post('/', (req, res)=>{

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
   console.log(`server started at port: ${PORT}`);
});
