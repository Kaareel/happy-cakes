import { Link } from "react-router-dom"

function Narbar(props) {
    return (<div className="container">
        <div className="barra">
            <nav className="narbar">
                <div className="links">
                    <div className="inicio">
                        <p><img src="https://cdn-icons-png.flaticon.com/128/8244/8244509.png" alt="" /><Link to='/'>Home</Link></p></div>
                    <div className="contact">
                        <p><img src="https://cdn-icons-png.flaticon.com/512/595/595714.png" alt="" /><Link to='/contacto'>Contacto</Link></p></div>
                </div>

                <div className="icono"><p>Happy Cakes<img src="https://cdn-icons-png.flaticon.com/128/992/992754.png" alt="" /></p></div>
            </nav>

        </div>
    </div>

    )
}
export default Narbar