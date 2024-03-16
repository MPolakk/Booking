import { Link } from "react-router-dom";
import { StyledNavBar, StyledNavButton, StyledMenu } from "./NavBar.styled";
import { useURL } from "../../../hooks/useURL";
const NavBar = () => {

   const url = useURL()

   return (

      <StyledNavBar>
         <Link to={url.home.path} style={{ padding: "10px" }}><img alt="logo" src="\images\ico-logo-001.png" width={'50px'} /></Link>
         <StyledNavButton>
            <div>
               <span className="top-line"></span>
               <span className="mid-line"></span>
               <span className="bot-line"></span>
            </div>
         </StyledNavButton>
         <StyledMenu>
            <div>
               <div className="exit-button">
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
                        <li>
                           <Link key={el[1].namePL} to={el[1].path}>
                              {el[1].namePL}
                           </Link>
                        </li>
                     )
                  }

               })}
            </ul>
         </StyledMenu>
      </StyledNavBar>

   );
}

export default NavBar;