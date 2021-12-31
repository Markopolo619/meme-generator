import Nav from './Components/Nav';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Popup from './Components/Popup';


function App() {
  const ClosePopup = true;
  return (
    <div className="App">
      <Nav />
      <Popup trigger={ClosePopup}>
        <h3 style={{fontFamily: "Montserrat-600, sans-serif"}}>Disclaimer: This app might show NSFW as I do not filter what comes through, so use at your own risk.</h3>
      </Popup>
      <Content />
      <Footer />
      
    </div>
  );
}

export default App;
