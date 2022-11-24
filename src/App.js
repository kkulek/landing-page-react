import {Navigation} from "./components/Navigation";
import {Hero} from "./components/Hero";
import {Benefits} from "./components/Benefits";

function App() {
    return (
        <div className="overflow-hidden">
            <Navigation/>
            <main>
                <Hero/>
                <Benefits />
            </main>
        </div>
    );
}

export default App;
