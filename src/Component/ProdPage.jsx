import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Sneakers from "../assets/images/image-product-1.jpg";
import Sneakers1 from "../assets/images/image-product-1-thumbnail.jpg";
import Sneakers2 from "../assets/images/image-product-2-thumbnail.jpg";
import Sneakers3 from "../assets/images/image-product-3-thumbnail.jpg";
import Sneakers4 from "../assets/images/image-product-4-thumbnail.jpg";
import { Typography } from "@mui/material";
import { Image, Row, Col } from 'antd';
import { Menu, Dropdown, Divider, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import "../App";

const useStyles = makeStyles((theme) => ({
  sneaker: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    gridAutoRows: "100px",
    margin: "13rem",
    alignItems: "center",
  },
  Shoe1: {
    /*display: "inline-block",*/
    justifySelf: "center",
  },
  Shoe2: {
    justifySelf: "end",
  },


}));

const ProductPage = ({ count, setCount }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  /*const [price, setPrice] = useState();*/

  const price = 125;

  return (
    <React.Fragment>
      <div className={classes.sneaker}>
        <div className={classes.Shoe1}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Image
                preview={{ visible: false }}
                width={265}
                height={250}
                borderRadius={10}
                src={Sneakers}
                onClick={() => setVisible(true)}
              />
              <div style={{ display: 'flex' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                  <Image src={Sneakers1} />
                  <Image src={Sneakers2} />
                  <Image src={Sneakers3} />
                  <Image src={Sneakers4} />
                </Image.PreviewGroup>
              </div>


            </Col>
          </Row>

        </div>
        <div className={classes.Shoe2}>
          <h5
            style={{
              color: "hsl(26, 100%, 55%)",
              fontWeight: "400",
              fontStyle: "Bold"
            }}>
            SNEAKER COMPANY
          </h5>
          <Typography
            variant="h1" style={{ fontWeight: "700", fontSize: "24px", lineHeight: "1.5em" }}>
            Fall Limited Edition <br />
            Sneakers
          </Typography>
          <small style={{ lineHeight: "1.5em" }}>These low profile sneakers are your perfect casual wear
            <br />companion. Featuring a durable rubber outer sole, they'll
            <br />withstand everything the whether as to offer.
          </small><br />
          <small><strong>$125.00</strong></small><br />
          <div className="">
            <p>
              <button onClick={() => setCount(count - 1)} className="">-</button>
              {count}
              <button onClick={() => setCount(count + 1)} className="" >+</button>
            </p>
            <br />


            {/* total price  */}
            <h4>Grand total</h4>
            <h1>$ {count * 125} </h1>

            <p>
              <button className="cart"
                onClick={() => setCount(count * 125)}
              >
                <img src="./assets/images/icon-cart.svg);" alt="" />
                Add to Cart
              </button>
            </p>
          </div>

        </div>

      </div>
    </React.Fragment>
  );
}


export default ProductPage;