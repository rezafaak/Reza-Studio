import './App.css';
import './style/landingpage.css'

import Intro from './component/Intro';
import NavigationBar from './component/NavigationBar';
import Trending from './component/Trending';
import Superhero from './component/Superhero';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='MyBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end of trending */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* end of superhero */}

      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
