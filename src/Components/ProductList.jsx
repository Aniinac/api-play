import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import ItemList from './ItemList'
import axios from 'axios';
import '../App.css';

function ProductList (props){

  let Arreglo = [];
  const[footerCard, setfooterCard]  = useState(true);
  const[item, setItem]              = useState();
  const[products, setProducts]      = useState();


useEffect(() => {
  const SearchProductList = axios.get('https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063#');
   SearchProductList
   .then(resp =>  {setItem(resp.data); setProducts(resp.data)} )
   .catch(console.warn)
   //SearchProductList();
}, []);


const allProducts = () => {
  setfooterCard(true);
   Arreglo = item.map(product => product);
  setProducts(Arreglo);
} 

  const descriptionView = (product) => {
    const itemProduct = product;
    console.log(itemProduct);
    props.history.push({
      pathname: 'ItemDescription',
      state: itemProduct,

    });
  }

return( 

  <div className="row">
    <div className="col-12 mb-2 ">
      <div className="row m-0 p-0 d-flex justify-content-center ">

        <div className="col-12 col-md-2 mb-1">
          <button className="btn-block btn btn-success " onClick={() => allProducts()} value="false"> Todos los Productos</button>
        </div>

      </div>



    </div>
 

     { products !== undefined ? products.map((product) => { 
      return (
        <ItemList  key={product._id} id={product._id} img={product.Children[0].Imgs[0].Path}
          Alt={product.Children[0].Imgs[0].Alt}
          name={product.Name}
          price={product.Children[0].Price}
          category={product.Category}
          description={product.Description}
          ToDescription={() => descriptionView(product)}
          footer={footerCard} />)})
          : <p> Please go back to home page and write correct address...</p> }
       </div >

) 

}

  export default withRouter(ProductList);