import "./Hero.css"
import bg from "../../assets/hero.png"

function Hero() {
  return (
    <>
        <main>
            <div className="main-bg">
                <img src={bg} alt="" />
            </div>
        </main>
    </>
  )
}

export default Hero