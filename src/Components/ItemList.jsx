import React from 'react';
import { withRouter } from 'react-router-dom';
//import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../App.css';

function ItemList(props) {
    

    const { ToDescription } = props;
    
    //const [modal, setModal] = useState(false);
    //const toggle = () => setModal(!modal)

    
    return (

        <div className="col-12 col-md-4 p-2 " key={props._id}>
            <div className="card h-100">
                <div className=" cdHProduct card-header ">

                    <img src={props.img} className="  card-img-top jss1842" alt={props.alt} />

                </div>
              
                <div className="card-body text-center">
                    <p className="font-weight-bold"> {props.name} </p>
                    <p className="font-weight-bold">Precio: {props.price} $</p>
                        <button onClick= {ToDescription} className="btn btn-success">Ver mas...</button>
                        
                        {/*
                        VENTANA MODAL
                        
                        <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}><p >{props.name}</p></ModalHeader> 
                            <ModalBody className="font-weight-bold">
                                <div className="col-3"> 
                                <img src={props.img} alt= {props.Alt} className="jss1842"/>
                                </div>
                            <div className="col-9">
                                <p > Precio: {props.price} $ </p>
                                <p >Descripcion: {props.description}</p>
                                <p >Categoria: {props.category} </p>

                            </div>
                               
                            </ModalBody>
                            <ModalFooter>
                            <Button onClick={() => getBack()}>Regresar</Button>{' '}
                                <Button  onClick={toggle}>Añadir</Button>
                            </ModalFooter>

                        
                        </Modal>    */}
                     
            </div>
        </div>
        </div>
    
    )
}
export default withRouter(ItemList);