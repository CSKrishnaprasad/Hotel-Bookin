import './featured.css'

const Featured = () => {
  return (
     <div className="featured">
       <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt=""
        className='featuredImg' />
        <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>123 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" 
        className='featuredImg' />
        <div className="featuredTitles">
            <h1>Thailand</h1>
            <h2>123 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" 
        className='featuredImg' />
        <div className="featuredTitles">
            <h1>Germany</h1>
            <h2>123 properties</h2>
        </div>
      </div>
     </div>
  
  )
}

export default Featured
