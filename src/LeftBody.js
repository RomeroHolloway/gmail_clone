import styled from "styled-components";
import React from 'react'
import ComposeButton from 'C:/React Projects/Buckey/gmail_clone/src/Buttons/Compose.js'
import {sideBarIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/SideBarIcons.js'
import {meetIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/MeetIcons.js'
import {hangOutIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/HangoutIcons.js'
import {socialIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/SocialIcons.js'


const LeftBody = () => {
  return (
<Wrapper>

<ComposeWrapper>

<ComposeButton/>

</ComposeWrapper>

<BodyButtons>
{
  sideBarIcons.map(item =>(
    <SideBarIcons>{item.icon}  {item.text} </SideBarIcons>
  ))

}


</BodyButtons>

<MeetWrapper>
<h5>Meet</h5>

{
  meetIcons.map(item =>(
    <MeetIcons>{item.icon}  {item.text} </MeetIcons>
  ))

}

{/* Google Meets */}

</MeetWrapper>

<HangoutsWrapper>

<h5>Hangouts</h5>
{/* Hnagouts */}

{
hangOutIcons.map(item =>(
  <HangOutIcons>{item.icon}  {item.text} </HangOutIcons>
))
}

</HangoutsWrapper>

<SocialWrapper>

{
socialIcons.map(icon =>(
  <>{icon}</>
))
}

</SocialWrapper>

    </Wrapper>

)

}






export default LeftBody

const Wrapper =styled.div `
height:100vh;



.MuiSvgIcon-root {
  color:#5f6368;

}




`

const ComposeWrapper =styled.div`
display:grid;
place-items: start;
padding: 20px 20px;
border-bottom: 1px  solid lightgray;
cursor:pointer;
`

const BodyButtons =styled.div`
`

const SideBarIcons =styled.div`
align-items:center;
display:grid;
grid-template-columns: 18% auto ;
padding: 7px 15px;
border-radius: 0 100px 100px 0;
cursor:pointer;
margin: 8px;


:hover {
background-color: lightgrey


}
`

const MeetWrapper =styled.div`
border-top: 1px  solid lightgray;

h5 {
  padding: 10px;
}

`
const MeetIcons=styled.div`

align-items:center;
display:grid;
grid-template-columns: 18% auto ;
padding: 7px 15px;
border-radius: 0 100px 100px 0;
cursor:pointer;
margin: 8px;


:hover {
background-color: lightgrey

}



`


const HangoutsWrapper =styled.div`
border-top: 1px  solid lightgray;



h5 {
  padding: 10px;
}


`

const HangOutIcons =styled.div`

align-items:center;
display:grid;
grid-template-columns: 18% auto ;
padding: 7px 15px;
border-radius: 0 100px 100px 0;
cursor:pointer;
margin: 8px;


:hover {
background-color: lightgrey

}
`



const SocialWrapper =styled.div`
padding-left:80px;
border-top: 1px  solid lightgray;

`
