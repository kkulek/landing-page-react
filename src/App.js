import {Navigation} from "./components/Navigation";
import {Hero} from "./components/Hero";
import {Benefits} from "./components/Benefits";
import {Calculator} from "./components/Calculator";

function App() {
    return (
        <div className="overflow-hidden">
            <Navigation/>
            <main>
                <Hero/>
                <Benefits/>
                <Calculator/>
            </main>
        </div>
    );
}

export default App;
