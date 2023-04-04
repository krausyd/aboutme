import { useState } from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Intro from './pages/intro';
import Wip from './pages/wip';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('intro');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className='app'>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Intro />
      <Wip />
      <Footer />
    </div>
  );
}

export default App;
