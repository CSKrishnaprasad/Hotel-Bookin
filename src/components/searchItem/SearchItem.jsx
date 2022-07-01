import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
     <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
     alt=""
     className="siImg" 
     />
     <div className="siDesc">
    <h1 className="siTitle">Manchester</h1>
    <span className="siDistance">2km from center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">Apartment with pool</span>
    <span className="siFeatures">3BHk - full AC + bathroom</span>
    <span className="siCancelOp">Free cancellation</span>
    <span className="siCancelOpSubtitle">You can cancel later,great offer awaiting!</span>
     </div>
     <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
      </div>
     </div>
    </div>
  )
}

export default SearchItem
