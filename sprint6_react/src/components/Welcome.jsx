import { Link } from "react-router-dom";
import '../styles/App.css';
function Welcome() {
  return (
    <>
    <div className="card" id="welcome">
          <div className="flex flex-col items-center justify-center ">
            <h1>Benvingut/da!</h1>
            <h4>Aconsegueix la millor qualitat</h4>
            <h5>Calcula el teu pressupost web</h5>
            <button type="button" className="btn btn-primary">
              <Link to="/CheckBox" className="btn btn-outline m-8">
                Calcular
              </Link>
            </button>
          </div>
        </div>  
    </>
  );
}
export default Welcome;