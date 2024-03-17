import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { StyledNavBarMobile, StyledNavButton, StyledMenu, StyledBlur } from "./NavBar.styled";
import { useURL } from "../../../hooks/useURL";
import { useMedia } from '../../../hooks/useMedia';
const NavBar = () => {
   const { isDesktop } = useMedia();
   const url = useURL()
   const [menuActive, setMenuActive] = useState(false)
   const [scroll, setScroll] = useState(false)

   const scrollHandler = () => {
      if (window.scrollY > 70) {
         setScroll(true)
      } else {
         setScroll(false)
      }
   }
   useEffect(() => {
      window.addEventListener("scroll", scrollHandler);
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, [scrollHandler]);

   return (
      <>
         {isDesktop ? <div></div> : (
            <StyledNavBarMobile className={scroll ? 'minimize' : null}>
               <Link to={url.home.path} style={{ padding: "10px" }}>
                  <img alt="logo" src="\images\ico-logo-001.png" width={scroll ? '40px' : '50px'} />
               </Link>

               <StyledNavButton $scroll={scroll} onClick={() => setMenuActive(true)}>
                  <div>
                     <span className="top-line"></span>
                     <span className="mid-line"></span>
                     <span className="bot-line"></span>
                  </div>
               </StyledNavButton>
               <StyledMenu className={menuActive ? 'active' : null}>
                  <div>
                     <div className="exit-button" onClick={() => setMenuActive(false)}>
                        <span></span>
                        <span></span>
                     </div>
                  </div>

                  <ul>
                     {Object.keys(url).map(key => [key, url[key]]).map((el) => {
                        if (el[1].path === '/') {
                           return null
                        } else {

                           return (
                              <li key={el[1].namePL}>
                                 <Link to={el[1].path} onClick={() => setMenuActive(false)}>
                                    {el[1].namePL}
                                 </Link>
                              </li>
                           )
                        }

                     })}
                  </ul>
               </StyledMenu>
               {menuActive ? <StyledBlur onClick={() => setMenuActive(false)} /> : null}
            </StyledNavBarMobile>
         )}

      </>
   );
}

export default NavBar;