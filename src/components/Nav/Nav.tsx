import "./Nav.css"

function Nav() {
  return (
    <>
        <nav>
            <div className="logosection">
                <h2>DETAILER</h2>
            </div>
            <div className="barsection">
                <a href="">Oferta</a>
                <a href="">Cennik</a>
                <a href="">Galeria</a>
                <a href="">O nas</a>
                <a href="">Opinie</a>
                <a href="">FAQ</a>
            </div>
            <div className="rightsection">
                <a href="">Umów wizytę</a>
                <span>
                    <span>1</span>
                    <span>2</span>
                    <span>3 </span>
                    <span>4</span>
                    <span>5</span>
                    <span>6 </span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                </span>
            </div>  
        </nav>
    </>
  )
}

export default Nav