import React from 'react'
import styled from "styled-components";
import {topsideBarIcons} from "C:/React Projects/Buckey/gmail_clone/src/Data/TopRightSideBarIcons.js"
import {botsideBarIcons} from "C:/React Projects/Buckey/gmail_clone/src/Data/BotRightSideBarIcons.js"

const RightBody = () => {
  return (
    <Wrapper>

    <TopWrapper>

    {
      topsideBarIcons.map(item =>(
        <TRIcons>{item.icon}  {item.text} </TRIcons>
      ))

    }


    </TopWrapper>







    <BotWrapper>

    {
      botsideBarIcons.map(item =>(
        <BRIcons>{item.icon}  {item.text} </BRIcons>
      ))

    }


    </BotWrapper>









    </Wrapper>
  )
}

export default RightBody

const Wrapper =styled.div`
border-left: 1px solid lightgray;
height:100vh;

`

const TopWrapper =styled.div`

border-bottom: 1px solid lightgray;



`

const TRIcons =styled.div`

align-items:center;
display:grid;
grid-template-columns: 18% auto ;
padding: 15px 10px;
cursor:pointer;
margin: 5px;


:hover {
background-color: lightgrey




`


const BotWrapper =styled.div`

`

const BRIcons =styled.div`

align-items:center;
display:grid;
grid-template-columns: 18% auto ;
cursor:pointer;
margin: 5px 10px 250px 10px;


:hover {
background-color: lightgrey



`
