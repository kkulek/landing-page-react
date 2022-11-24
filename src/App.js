import {Navigation} from "./components/Navigation";
import {Hero} from "./components/Hero";
import {Benefits} from "./components/Benefits";
import {Calculator} from "./components/Calculator";
import {Blog} from "./components/Blog";

function App() {
    return (
        <div className="overflow-hidden">
            <Navigation/>
            <main>
                <Hero/>
                <Benefits/>
                <Calculator/>
                <Blog/>
            </main>
        </div>
    );
}

export default App;
