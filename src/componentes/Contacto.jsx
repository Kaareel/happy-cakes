function Contacto(props) {
    return (
        <div className="contacto">
        <h3>Cuéntanos, ¿en que te podemos ayudar?</h3>
        <form>
            <div className="correo">
                <p>Correo:</p>
                <input type="text" placeholder="name@example.com"  value={props.value} />
            </div>
            <div className="Descripcion">
                <p>Descripción:</p>
                <input type="text" style={{height:'100px'}}/>
            </div>
            <button type="button" class="btn btn-danger">Enviar</button>
        </form>
    </div>
    )
}
export default Contacto