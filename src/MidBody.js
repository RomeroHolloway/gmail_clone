import React from 'react';
import styled from "styled-components";
import {tLMidIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/TLMidIcons.js'
import {tLMidIcons2} from 'C:/React Projects/Buckey/gmail_clone/src/Data/TLMidIcons2.js'
import {tRIcons} from 'C:/React Projects/Buckey/gmail_clone/src/Data/TRIcons.js'
import {unreadBar} from 'C:/React Projects/Buckey/gmail_clone/src/Data/UnreadBar.js'





const MidBody = () => {
  return (

<Wrapper>

<TopWrapper>

<UpperLeftWrapper>

{
  tLMidIcons.map(item =>(
    <>{item.icon} </>
  ))

}



</UpperLeftWrapper>

<MidWrapper>
{
  tLMidIcons2.map(item =>(
    <>{item.icon} </>
  ))

}
</MidWrapper>

<UpperRightWrapper>

{
  tRIcons.map(item =>(
    <>{item.icon} </>
  ))

}


</UpperRightWrapper>

</TopWrapper>

<BodyWrapper>

  <BodyWrapper1>

  {
    unreadBar.map(item =>(
      <UnreadBar>{item.icon}  {item.text} </UnreadBar>
    ))

  }


  </BodyWrapper1>

  <BodyWrapper2>
  <p></p>
  </BodyWrapper2>




</BodyWrapper>


</Wrapper>
  )
}

export default MidBody

const Wrapper = styled.div`
grid-template-columns: 18% auto ;
padding: 10px 15px;

`

const TopWrapper =styled.div `
display:grid;
grid-template-columns: 50px auto 45px;
margin: 15px;
`

const UpperLeftWrapper = styled.div`
display:grid;
grid-template-columns: 20px auto 10px;

`

const TLMidIcons = styled.div`

`

const MidWrapper = styled.div`
margin: 0.1px 10px;



`

const UpperRightWrapper =styled.div`
text-align:left;
display:grid;
grid-template-columns: 20px auto 10px;
`

const BodyWrapper =styled.div `
border-top: 1px  solid lightgray;
display:grid;
margin-top:10px;
text-color:lightgrey;
align-items:center;






`

const BodyWrapper1 =styled.div `

`

const UnreadBar =styled.div`
display:grid;
grid-template-columns: 35px auto 10px;
margin-top:15px;
text-color:lightgrey;


`



const BodyWrapper2 =styled.div `
text-align:right

`

const BodyWrapper3 =styled.div `

`

const BodyWrapper4 =styled.div `

`
