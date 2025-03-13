import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Card title="Knyga" description="Knygos aprašymas" />
      <Card > Kates smakes </Card>
      <Footer />
    </div>
  );
}

export default App;