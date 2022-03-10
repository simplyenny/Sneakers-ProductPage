import React from 'react'
import { Menu, Dropdown,Divider, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      Cart <Divider />
    </Menu.Item>
    <Menu.Item key="2">
    Your Cart is empty.
    </Menu.Item>
    <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);


const Basket=()=> {
  return (
    <Space wrap>
      <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<ShoppingCartOutlined />}>
      
    </Dropdown.Button>
  
  </Space>
  
);
}


export default Basket;