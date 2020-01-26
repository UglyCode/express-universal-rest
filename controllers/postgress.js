const {Client} = require('pg');
const DATABASE_LINK = process.env.DATABASE_URL || 'localhost:5432';

const client = new Client({
    connectionString: DATABASE_LINK,
});
client.connect();

const handleTableGet = (req,res) => {
    if (!req.params.table_name){
        noTableNameHandler(res);
        return;
    }

    const table = req.params.table_name;
    client.query(`SELECT * FROM public.${table};`)
        .then(result => sendQueryResult(result, res));
};

const handleTablePost = (req, res) => {

};

const sendQueryResult = (queryResult, res) => {

    let resBody = queryResult.rows;

    if (!resBody || !resBody.isArray()){
        res.status(500);
        resBody = 'Invalid query result';
    } else if (arrayOfStrings.length === 0){
        resBody = 'Table is empty';
    }

    res.json(resBody);
};

const noTableNameHandler = (res) => {
    res.status(400).json('no table name passed.');
};