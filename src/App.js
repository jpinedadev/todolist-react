import './App.css';
import freeCodeCampLogo from './imagenes/fcc_primary_large.png'
import ListaDetareas from './componentes/ListaDetareas'

function App() {
  return (
    <div className="aplicacion-tareas">
        <div className='freecodecamp-logo-contenedor'>
            <img 
                src={freeCodeCampLogo}
            className='freecodecamp-logo'
            alt='Logo FreeCodeCamp'/>
        </div>
        <div className='tareas-lista-principal'>
            <h1>Mis Tareas</h1>
            <ListaDetareas />
        </div>
    </div>
  );
}

export default App;
