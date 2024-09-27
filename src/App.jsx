import "./App.css";
import Contactinput from "./components/containers/Contactinput";
import Contactlist from "./components/containers/Contactlist";

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Contact Apps</h1>
        <h2>Add New Contact</h2>
        <Contactinput />
        <Contactlist />
      </div>
    </>
  );
}

export default App;
