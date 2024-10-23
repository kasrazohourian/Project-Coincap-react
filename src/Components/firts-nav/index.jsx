import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";



export function Coins (){


    return(
        
        <>

           
<nav>  
    <div className="container nav-container" > 
    <div className="pages">
    <Link to="Coins">Coins</Link>
    <Link to="Exchange">Exchange</Link>
    <Link to="Contact us">Contact us</Link>
    </div>
     <div className="logo"> <img src="https://coincap.io/static/logos/black.svg" alt="" /></div>

<div className="setting">
    <div>USD ▾</div>
    <div>English ▾</div>
    <div class="setting-search"> <input  type="Search" placeholder=  "serach" /></div>
   <div class="setting-logo"> <SettingsIcon /> </div>  

    </div> 
</div>
</nav>
            </>


    );
}