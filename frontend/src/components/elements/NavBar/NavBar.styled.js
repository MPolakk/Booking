import styled from 'styled-components';

const StyledNavBar = styled.div`
   display: flex;
   align-items: center;
   height: 70px;
   justify-content: space-between;
   background-color: ${({ theme }) => theme.header.bg};
   border-bottom: 1px solid white;
`

const StyledNavButton = styled.div`

   height: 100%;
   width: 70px;
   position: relative;
   border-left: 1px solid white;
   
   & > div {
      display: grid;
      place-items: center;
      height: 50px;
      padding: 10px;
   }
   & > div > span {
      display: block;
      position: absolute;
      border-bottom: 2px solid black;
      width: 30px;
      
   }
   .top-line {
      top: 40%;
   }
   .mid-line {
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 25px;
   }
   .bot-line {
      
      bottom: 40%;
   }
`
const StyledMenu = styled.div`
   position: absolute;
   cursor: pointer;
   top:0;
   left:0;
   display: block;
   width: 260px;
   height: 100vh;
   background-color: ${({ theme }) => theme.header.bg};
   & > div {
      position: relative;
      .exit-button {
         position: absolute;
         right: 0;
         margin: 10px;
         height: 20px;
         width: 20px;
         span {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transform-origin: center;
            border-bottom: 2px solid white;
            width: 15px;
            user-select: none;
         }
         span:nth-child(1) {
            transform: translate(-50%) rotate(-45deg);
         }
   }
   }

   & > ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.font.titlePrimary};
      font-size: ${({ theme }) => theme.fontSize.titleH5};
      padding: 60px 0;
      & > li{
      user-select: none;
      cursor: pointer;
      height: 50px;
      width: 100%;
      padding: 15px 25px;
         & > a {
         color: ${({ theme }) => theme.textcolor.primary};
         text-decoration: none;
         }
      }
   }
   
`
export { StyledNavBar, StyledNavButton, StyledMenu }