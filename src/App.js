import Contact from './Contact';

import img1 from './img/cat-1.jpg'
function App() {
  return (
    <div className="App">
      <Contact 
      img={img1}
      name= 'Mr. Whiskerson'
      phone= '(212) 555 1234'
      email= 'mr.whiskerson@gmail.com'
      />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
