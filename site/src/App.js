import Header from './Components/Header/Header';
import YoutubeEmbed from './Components/YoutubeEmbed/YoutubeEmbed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <YoutubeEmbed videoId="uzSme3PRhZ0"/>
    </div>
  );
}

export default App;
