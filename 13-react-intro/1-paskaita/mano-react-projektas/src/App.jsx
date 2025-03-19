// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import './App.css';
// import Card from './components/Card';
import VartotojoProfilis from './Profilio1Components/VartotojoProfilis';

function App() {
  return (
    <div className="App">
      {<VartotojoProfilis vardas="Jonas" amzius={30} spalva="blue" />}
      {<VartotojoProfilis vardas="Laura" amzius={25} spalva="red" />}
      {/* <Header />
      <MainContent />
      <Card title="Knyga" />
      <Card title={"kortele su vaiku"}> Kates smakes </Card>
      <Footer /> */}
    </div>
  );
}

export default App;