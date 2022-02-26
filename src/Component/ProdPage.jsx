import React from "react";
import {useState} from "react";
import {makeStyles} from "@mui/styles";
import Sneakers from "../assets/images/image-product-1.jpg";
import Sneakers1 from "../assets/images/image-product-1-thumbnail.jpg";
import Sneakers2 from "../assets/images/image-product-2-thumbnail.jpg";
import Sneakers3 from "../assets/images/image-product-3-thumbnail.jpg";
import Sneakers4 from "../assets/images/image-product-4-thumbnail.jpg";
import { Typography } from "@mui/material";
import { Image, Row, Col } from 'antd';
import "../App";

const useStyles = makeStyles((theme)=>({
    sneaker:{
        display: "grid",    
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        gridAutoRows: "100px",   
        margin: "13rem", 
        alignItems: "center",
        "@media (max-width:780px)":{
            display: "inline-block",
            margin: "5rem", 
            textAlign: "left",
            

        },
    },
    Shoe1:{
        /*display: "inline-block",*/
        justifySelf:"left",
    },
    Shoe2:{
        justifySelf:"end",
        padding: "1rem",

        "@media (max-width:780px)":{
            fontSize: "16px",
            fontWeight: "300",
            padding:".5rem",
            lineHeight:".5rem",
        },
    },
  

}));

const ProductPage=()=>{
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState();

    /*const price = 125;*/

    return(
       <React.Fragment>
           <div className={classes.sneaker}>
               <div className={classes.Shoe1}>  
               <Row gutter={{ xs: 12, sm: 20, md: 24, lg: 32 }}>
                   <Col className="gutter-row" span={18}  >
                   <Image
                           preview={{ visible: false }}
                           width={265}
                           height={250}
                           borderRadius={10}
                           src={Sneakers}
                           onClick={() => setVisible(true)}
                         />
                         <div style={{ display: 'flex', padding:'10px', margin:'15px'}}>
                           <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                             <Image src={Sneakers1} style={{margin:'15px'}}/>
                             <Image src={Sneakers2} />
                             <Image src={Sneakers3} />
                             <Image src={Sneakers4} />
                           </Image.PreviewGroup>
                         </div>


                   </Col>
                   </Row>                            
                        
                </div>
               <div className={classes.Shoe2}>
                   <h2
                     style={{color: "hsl(26, 100%, 55%)", 
                          fontWeight: "600", 
                          fontStyle:"Bold"}}>
                          SNEAKER COMPANY
                   </h2>
                   <Typography
                   variant="h1" style={{fontWeight: "700", fontSize: "24px", lineHeight: "1.5em"}}>
                       Fall Limited Edition <br />
                       Sneakers
                   </Typography>
                   <h2 style={{lineSpacing: "1.5em", fontWeight:"400"}}>These low profile sneakers are your perfect casual wear
                       companion. Featuring a durable rubber outer sole, they'll
                       withstand everything the whether as to offer.
                   </h2>
                   <small><strong>$125.00</strong></small><br />
                   <div className="button">
                     
                     <p>
                     <button onClick={() => setCount(count - 1)} className="remove">-</button>
                     {count} 
                     <button onClick={() => setCount(count + 1)} className="add" >+</button>
                    </p>
                        <button onClick="ShowAndHide()">
                         <h2>Price is ${count*125}</h2> 
                    
                          <img src="
                          ./assets/images/icon-cart.svg);" alt=""/>
                          Add to Cart
                          </button>
                         
                        
                   </div>

               </div>

           </div>
       </React.Fragment>
    );
}


export default ProductPage;