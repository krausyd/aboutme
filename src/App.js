import { useEffect, useState } from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import DotGroup from './components/dotgroup';
import Intro from './pages/intro';
import Wip from './pages/wip';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('intro');
  const [isTopOfPage, setIsTopOfPage] = useState('true');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app'>
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        )}
        <Intro />
        <Wip />
      </div>
      {/* <Intro />
      <Wip />
      <Footer /> */}
    </div>
  );
}

export default App;
