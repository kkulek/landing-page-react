import {Navigation} from "./components/Navigation";
import {Hero} from "./components/Hero";
import {Benefits} from "./components/Benefits";
import {Calculator} from "./components/Calculator";
import {Blog} from "./components/Blog";
import {Industries} from "./components/Industries";

function App() {
    return (
        <div className="overflow-hidden">
            <Navigation/>
            <main>
                <Hero/>
                <Benefits/>
                <Calculator/>
                <Blog/>
                <Industries/>
            </main>
        </div>
    );
}

export default App;
