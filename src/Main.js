import React from 'react';
import styled from "styled-components";
import LeftBody from './LeftBody.js';
import MidBody from './MidBody.js';
import RightBody from './RightBody.js';



const MainBody = () => {
  return (
    <div>











    <Body>

    <LeftBody/>


    <MidBody/>



    <RightBody/>








    </Body>




    </div>
  )
}

export default MainBody

const Body =styled.div `
display:grid;
grid-template-columns:270px auto 50px;

`
