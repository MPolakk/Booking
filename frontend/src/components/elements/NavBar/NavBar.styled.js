import styled from 'styled-components';

const StyledNavBar = styled.div`
   position: fixed;
   display: grid;
   place-items: center;
   background-color: ${({ theme }) => theme.header.bg};
   height: ${({ className }) => className === 'minimize' ? '60px' : '110px'};
   width: 100%;
   transition: height .4s;
   & > ul {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      
      & >li {
         
         & > a {
            display: grid;
            place-items: center; 
            height: 100%;
            text-decoration: none;
            padding: 0 20px ;
            color: ${(({ theme }) => theme.textcolor.primary)};
            font-size: ${(({ theme }) => theme.fontSize.main)};
            text-transform: uppercase;
            font-family: ${({ theme }) => theme.font.titlePrimary};
            img {
               transition: height .6s;
            }
         }
      }
         
        
   }
`
// ---------------------MOBILE---------------
const StyledNavBarMobile = styled.div`
   position: fixed;
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   background-color: ${({ theme }) => theme.header.bg};
   height: ${({ className }) => className === 'minimize' ? '60px' : '70px'};
   transition: height .4s;
   overflow: hidden;
   img {
      transition: width .2s;
   }
`

const StyledNavButton = styled.div`
   height: 70px;
   width: 70px;
   position: relative;
   border-left: ${({ $scroll }) => $scroll ? '1px solid transparent' : '1px solid white'};
   transition: border-left .2s;
   & > div {
      display: grid;
      place-items: center;
      height: 50px;
      padding: 10px;
   }
   & > div > span {
      display: block;
      position: absolute;
      user-select: none;
      border-bottom: 2px solid ${({ $scroll }) => $scroll ? 'white' : 'black'};
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
   position: fixed;
   top:0;
   left: ${(props) => props.className === 'active' ? '0' : '-260px'};
   display: block;
   width: 260px;
   height: 100vh;
   background-color: ${({ theme }) => theme.header.menu};
   z-index: 2;
   transition: left 0.2s;
   
   
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
      height: 50px;
      width: 100%;
      padding: 15px 25px;
      cursor: pointer;
         & > a {
         color: ${({ theme }) => theme.textcolor.primary};
         text-decoration: none;
         }
      }
   }
   
`

const StyledBlur = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.25);
   z-index: 1;
`
export { StyledNavBar, StyledNavBarMobile, StyledNavButton, StyledMenu, StyledBlur }