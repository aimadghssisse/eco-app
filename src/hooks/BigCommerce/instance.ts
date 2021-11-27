import axios from 'axios'
//
let instance = axios.create({
  baseURL: 'http://localhost:1337',
  //timeout: 30000,
  withCredentials: false,
  headers: {
    // 'Content-Type': 'application/json',
	'Content-Type': 'application/json',
  }
});

//
//
instance.post('/getProducts', {
    data: {
        query: `query products {
            site {
                products  {
                    edges {
                        cursor
                        node {
                            entityId
                            name
                        }
                    }
                }
            }
        }`
    }
}).then(resp => {
	console.log(resp.data);
}).catch(error => {
    console.log(error);

})

// import request from 'request'
// console.log(request);

// var options = {
//   method: 'GET',
//   url: 'https://api.bigcommerce.com/stores/uy6zkv5dq4/v3/catalog/products',
//   headers: {'x-auth-token': 'd9lh7ux2np1tl3edz9oygdkyvkrkxbc'}
// };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
// });
