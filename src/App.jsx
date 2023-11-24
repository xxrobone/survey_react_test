import './App.css';
import React, { useState } from 'react';
import Form from './components/form/Form';
import VID from './assets/video/people.mp4';
import Video from './components/videobg/Video';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Selector from './components/selector/Selector';
import About from './components/about/About';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className='App'>
      <Header />
      <div>
        <Video vid={VID} />
      </div>
      <h1>Demographic Age Survey</h1>
      <Selector onSelect={handleSelect} />
      {selectedComponent === 'form' && <Form />}
      {selectedComponent === 'about' && <About />}
      <Footer />
    </div>
  );
}

export default App;
