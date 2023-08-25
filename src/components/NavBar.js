import '../components/navBar.css'
const NavBar = () =>{
  return(
    <div>

        <div className="main">
            <div className="nav">
              <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
              <div className="search">
                <p>Search food...</p>
              </div>
            </div>
            <div className='btn'>
            <button>All items</button>
              <button >Breakfast</button>
              <button>Lunch</button>
              <button>Dinner</button>
            </div>
        </div>
    </div>
  )
}
  
export default NavBar