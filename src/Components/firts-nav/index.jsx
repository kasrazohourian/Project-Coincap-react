import SettingsIcon from '@mui/icons-material/Settings';
export function Coins (){


    return(
        
        <>

           
<nav>  
    <div className="container nav-container" > 
    <div className="pages">
    <a href="Coins">Coins</a>
    <a href="Exchange">Exchange</a>
    <a href="Contact us">Contact us</a>
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