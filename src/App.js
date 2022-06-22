import Contact from './Contact';

import img1 from './img/cat-1.jpg'
import img2 from './img/cat-2.jpg'
import img3 from './img/cat-3.jpg'
import img4 from './img/cat-4.jpg'

function App() {
  return (
    <div className="App">
      <Contact 
        img={img1}
        name= 'Mr. Whiskerson'
        phone= '(212) 555 1234'
        email= 'mr.whiskerson@gmail.com'
      />
      <Contact 
        img={img2}
        name= 'Fluffykins'
        phone= '(212) 555 5678'
        email= 'fluffykins@gmail.com'
      />
      <Contact 
        img={img3}
        name= 'Felix'
        phone= '(212) 555 9101'
        email= 'felix@gmail.com'
      />
      <Contact 
        img={img4}
        name= 'Pumpkin'
        phone= '(212) 555 1213'
        email= 'pumpkin@gmail.com'
      />
    </div>
  );
}

export default App;
