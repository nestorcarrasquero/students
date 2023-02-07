const New = () => {
    return (
        <div>
            <h1 className="row justify-content-center">Registro de Estudiante</h1>
            <form>
                <div className="form-row"> 
                    <div className="col">
                        <label htmlFor="cedula" className="form-label">Cédula</label>
                        <div className="input-group input-group-lg">
                            <input type="text" name="cedula" className="form-control" />
                        </div>                        
                    </div>       
                    <div className="col">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <div className="input-group input-group-lg">
                            <input type="text" name="nombre" className="form-control" />
                        </div>                        
                    </div>
                    <div className="col">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <div className="input-group input-group-lg">
                            <input type="text" name="apellido" className="form-control" />
                        </div>       
                    </div>
                </div> 
                <div className="form-row"> 
                    <div className="col">
                        <label htmlFor="gescolar" className="form-label">GEscolar</label>
                        <div className="input-group input-group-lg">
                            <input type="text" name="gescolar" className="form-control" />
                        </div>                        
                    </div>       
                    <div className="col">
                        <label htmlFor="cedula_escolar" className="form-label">Cédula Escolar</label>
                        <div className="input-group input-group-lg">
                            <input type="text" name="cedula_escolar" className="form-control" />
                        </div>                        
                    </div>                    
                </div>           
                <button type="submit" className="btn btn-primary mt-2 btn-lg">Enviar</button>                
            </form>          
        </div>
    )
}

export default New;