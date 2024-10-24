import numeral from 'numeral';
export function CoinsRow (props){

    const {rank,name,symbol,priceUsd,marketCapUsd,
           vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr}
    = props.data;
    
    //symbol(image) ro horuf kuchick kardan va az server gereftan:
    const toLowerCaseSymbol = symbol.toLowerCase();
    const image = `https://assets.coincap.io/assets/icons/${toLowerCaseSymbol}@2x.png`;
    //



    return(
<>

<div className="coins-row">
          <div>{rank}</div>
          <div className="coin-name">
          <div className="coin-logo"><img src={image} /></div>
              <div>{name}
              <div className="coin-symbol">{symbol} </div>
              </div>
              </div>
        <div>{numeral(priceUsd).format('$0,0.00')}</div>
        <div>{numeral(marketCapUsd).format('$0,0.00 a')}</div>
        <div>{numeral(vwap24Hr).format('$0,0.00')}</div>
        <div>{numeral(supply).format('$0,0.00 a')}</div>
        <div>{numeral(volumeUsd24Hr).format('$0,0.00 a')}</div>
        <div>{numeral(changePercent24Hr).format('0.0%')}</div>
          </div>



</>


);
}