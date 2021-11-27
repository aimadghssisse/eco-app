// const { customAxios } = require("../utils/axios");
//
// module.exports = {
//     getProducts : async (req, res, next) => {
//       try {
//         const productIds = req.query.productIds;
//         const { data } = await customAxios('graphql').get(
//           `/stores/${process.env.BIG_COMMERCE_SITE_HASH}/v3/catalog/products`
//         );
//         res.json(data);
//       } catch (error) {
//         next(error);
//       }
//     }
// }
