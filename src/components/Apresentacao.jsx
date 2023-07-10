import Apresentacao1 from '../Imgs/apresentaçao.png';
import Apresentacao2 from '../Imgs/apresentaçao2.png';
import Apresentacao3 from '../Imgs/apresentaçao3.png';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react'
import {Carousel} from 'react-bootstrap'




  const Apresentacao = ()=>{
   
    return( 
       
        <>  
       <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 "
                        src={Apresentacao1}
                        alt="First slide"
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Apresentacao2}
                        alt="Second slide"
                    />
                 
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Apresentacao3}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
              
            </Carousel>
        </>  
    )
 }
 export default  Apresentacao