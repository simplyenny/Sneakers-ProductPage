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
import { Menu, Dropdown,Divider, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import "../App";

const useStyles = makeStyles((theme)=>({
    sneaker:{
        display: "grid",    
        gridTemplateColumns: "repeat(3, 5fr)",
        gap: "10px",
        gridAutoRows: "100px",   
        margin: "18rem", 
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
        marginTop: "6rem",

        "@media (max-width:780px)":{
            fontSize: "16px",
            fontWeight: "300",
            padding:".5rem",
            lineHeight:".5rem",
        },
    },
  

}));

function handleMenuClick(e) {
    const count=0;
    if(count===0){
        message.info( "Your Cart is empty");
        }
        else{
          return "Price is ${count*125}"
          };
  }
  


const ProductPage=()=>{
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState();
    const Count = this.state.Count;

    
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
            Cart <Divider />
          </Menu.Item>
          <Menu.Item key="2">
          Your Cart is empty.
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
             {handleMenuClick}
          </Menu.Item>
        </Menu>
      );

    /*const price = 125;*/

    return(
       <React.Fragment>
           <div className={classes.sneaker}>
               <div className={classes.Shoe1}>  
               <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                   <Col className="gutter-row" span={18}  >
                   <Image
                           preview={{ visible: false }}
                           width={315}
                           height={300}
                           borderRadius={50}
                           src={Sneakers}
                           onClick={() => setVisible(true)}
                         />
                         <div style={{ display: 'flex', paddingTop:'10px'}}>
                           <Image.PreviewGroup preview={{ visible: false, onVisibleChange: vis => setVisible(vis) }}>
                             <Image src={Sneakers1} style={{marginLeft:'25px', flex: '1'}}/>
                             <Image src={Sneakers2} style={{marginLeft:'35px',flex:'2'}}/>
                             <Image src={Sneakers3} style={{marginLeft:'45px', flex:'3'}}/>
                             <Image src={Sneakers4} style={{marginLeft:'55px', flex:'4'}}/>
                           </Image.PreviewGroup>
                         </div>


                   </Col>
                   </Row>                            
                        
                </div>
               <div className={classes.Shoe2}>
                   <h2
                     style={{color: "hsl(26, 100%, 55%)", 
                          fontWeight: "400", fontSize:"14px" }}>
                          SNEAKER COMPANY
                   </h2>
                   <Typography
                   variant="h1" style={{fontWeight: "700", fontSize: "20px", lineHeight: "1.5em"}}>
                       Fall Limited Edition <br />
                       Sneakers
                   </Typography>
                   <small style={{lineSpacing: "1.5em", fontWeight:"500"}}>These low profile sneakers are your perfect casual wear
                       companion. Featuring a durable rubber outer sole, they'll
                       withstand everything the whether as to offer.
                   </small>
                   <h2><strong>$125.00</strong></h2><br />
                   <div className="button">
                     
                     <p className="but">
                     <button onClick={() => {Count ? Count++ : Count--}} className="remove">-</button>
                     {count} 
                     <button onClick={() => setCount(count + 1)} className="add" >+</button>
                    </p>
                        <button 
                        className="cart"
                        onClick="ShowAndHide()">
                         <h2>Price is ${count*125}</h2> 
                    
                          <img src="
                          ./assets/images/icon-cart.svg);" alt=""/>
                          Add to Cart
                          </button>

                         
                        
                   </div>

               </div>

           </div>
           
           <Space wrap>
           <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<ShoppingCartOutlined />}>
           
         </Dropdown.Button>
       
       </Space>
       </React.Fragment>
    );
}


export default ProductPage;