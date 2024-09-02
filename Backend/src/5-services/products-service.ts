import dal from "../2-utils/dal";
import ProductModel from "../4-models/product-model";


async function getAllProducts():Promise<ProductModel[]> { 
     const sql = `SELECT * FROM public.eshop ORDER BY id ASC`;

     const products = await dal.execute(sql); 

     return products
}





export default { 
    getAllProducts
}