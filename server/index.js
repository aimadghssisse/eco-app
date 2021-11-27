const gatsby = require("gatsby-plugin-nodejs");
const express = require("express");
const routes = require("./routes");
const axios = require('axios');
const cors = require('cors')
const morgan = require("morgan")


const app = express();
app.use(cors({
    origin: '*'
}))
app.use(morgan("tiny"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);
let instance = axios.create({
  baseURL: 'https://api.bigcommerce.com/stores/uy6zkv5dq4/v3',
  //timeout: 30000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
	'X-Auth-Token': 'd9lh7ux2np1tl3edz9oygdkyvkrkxbc',
    // 'X-Auth-Client': 'cidpqcpkvlfmsbl97hgeq04fe7hmki3'
  }
});


// function getProducts() {
//     return instance.get('/catalog/products').then(resp => {
//     	console.log(resp);
//     }).catch(error => {
//         console.log(error);
//
//     })
// }
// const port = 3001;
// app.listen(port, () => {
// 	console.log(`API server listening on port ${port}`);
// });
//
// export default app;



app.post('/getProducts', function (req, res) {
    console.log(req.body);
    instance.get('/catalog/products').then(response => {
        console.log('work');
        res.json(response.data);
    }).catch(error => {
        console.log("error");

    })
});

app.get('/ping', function (req, res) {
    res.json('PONG');
});

const port = process.env.PORT || 1337;
console.log(port);
app.listen(port, () => console.log(`listening on port ${port}`));
