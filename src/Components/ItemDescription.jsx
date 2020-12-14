import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './details.css';

console.log('hola');
function ItemDescription(props) {

    const [alt, setAlt]                 = useState("");
    const [brand, setBrand]             = useState("");
    const [category, setCategory]       = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg]                 = useState("");
    const [name, setName]               = useState("");
    const [price, setPrice]             = useState("");
    const [unit, setUnit]               = useState("");

useEffect(() => {
    
    if (props.location.state) {
            const product = props.location.state;
            setAlt(product.Children[0].Imgs[0].Alt)
            setBrand(product.Brand);
            setCategory(product.Category);
            setDescription(product.Description);
            setImg(product.Children[0].Imgs[0].Path);
            setName(product.Name);
            setPrice(product.Children[0].Price);
            setUnit(product.Children[0].WebQty);
        }
}, [props.location.state])

  
const getBack = () => {
        props.history.goBack();
        }

    return (
        <div className = "row">
            <div className="card h-100">
            <div className="itemDetailContent-root-3397">
                <div className="row">
                    <div className="itemDetailsTitle-root-3366">
                        <h2 className="itemDetailsTypography-h6-3377"> {name} </h2>
                    </div>
                    <div className=" col-3">
                        <img src={img} className="  card-img-top jss1842" alt={alt} />
                    </div>
                     
                    <div className="col-9">
                            <div className="row-detailsProduct">
                        <div className="col-12">
                            <p className="priceText">Precio: {price} $</p>
                        </div>
                            <div className="col-12">
                                    <p className="mt-dP">Descripcion: {description}, para mas informacion del producto por favor coloquese en contacto... </p>
                                    <p className="mt-dP">Marca: {brand} </p>
                                    <p className="mt-dP">Categoria: {category} </p>
                             </div>  
                            <div className="col-12">
                            <p className="font-weight-bold">Catidad Disponible: {unit} </p>
                                    </div>
                        </div>
                               
                        </div>
                        <div className="row">
                         <div className="mt-5">
                            <div className="itemDetailsActions-root-3439">
                                <button className="itemDetailsButtonBase-root-3468 itemDetailsButton-root-3441 itemDetailsButton-text-3443 jss987" 
                                onClick={() => getBack()}>Regresar</button>
                                <button className="itemDetailsButtonBase-root-3496 itemDetailsButton-root-3469 itemDetailsButton-text-3471 jss988" >Añadir al carrito</button>
                            
                         </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default withRouter(ItemDescription);