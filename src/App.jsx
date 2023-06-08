import { useState } from 'react';
import Result from './components/Result';
import Questions from './components/questions';
import './styles/app.css';

function App() {
  const [isResultShowen,setIsResultShowen] = useState(false);
  const [allAnwers,setAllAnswers] = useState([]);
  console.log(allAnwers)

  return (
    <main className='App'>
      <img className='top-image' src="/img1.png" alt="" />
      <img className='bottom-image' src="/img2.png" alt="" />
      <Questions setIsResultShowen={setIsResultShowen} setAllAnswers={setAllAnswers} />
      <Result isResultShowen={isResultShowen} setIsResultShowen={setIsResultShowen} />
    </main>
  )
}

export default App
