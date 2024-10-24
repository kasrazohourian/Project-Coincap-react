import { useState, useEffect } from "react";
import { CoinsRow } from "../Coins-Row/coinsRow";
import { getAssetsList } from "../data/server";
import { lastContainar } from "../lastContainar";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';




export function CoinsSection() {

  const [data, setData]= useState([]);
  const [page, setPage]= useState(1);
  const limit = 100;

  useEffect(()=>{
    async function  fetchAssets () {
    const result = await getAssetsList(page, limit);

    setData((prevData) => [...prevData, ...result]);

    };
    fetchAssets();
  }, [page]);

  const moreCoins = async (event) =>{
    event.preventDefault();
    setPage ((prevPage) => prevPage + 1);
    await fetchAssets();
  };
    

    return (
        
      <section>
        <div className="coinsSection">
          <div className="coins-row">
            <div>Rank</div>
            <div>Name</div>
            <div>Price</div>
            <div>Market Cap</div>
            <div>VWP (24Hr)</div>
            <div>Supply</div>
            <div>Volume 24Hr</div>
            <div>Change 24Hr</div>
            </div>
          
          
            
            
            { data.map((dataItems) => {
                return <CoinsRow data={dataItems} key={dataItems.id}/>;
                
                })}
          
         
       <button onClick={moreCoins}> View More </button>
       
        </div>
   
        
        <div className="lastContainar">
          <div>DICOINCAP.IO  
          <a href="">Methodology</a>
          <a href="">Support</a>
          <a href="">Our API</a>
          <a href="">Careers</a>

          
          </div>
          <div>LEGALS
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <br /> <br /> 
            <div>DISCLAIMER <br />
            <a href="">Neither ShapeShift AG nor CoinCap are in <br /> any way associated with CoinMarketCap, <br /> LLC or any of its goods and services</a></div>
          
        

          </div>
          <div > FOLLOW US  <br /> <br />
            <TwitterIcon/>
    
            <FacebookIcon/>

          
          </div>
          <div>COINCAP APP AVAILABLE ON
            <img src="https://coincap.io/static/images/stores/google_play.svg" alt="" />
            <img src="https://coincap.io/static/images/stores/apple_store.svg" alt="" />
          </div>
        </div>
      
      </section>
    
  
    
      
    );
  }

  