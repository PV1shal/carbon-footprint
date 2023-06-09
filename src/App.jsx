import { useEffect, useState } from 'react';
import Result from './components/Result';
import Questions from './components/questions';
import footprintCalculator from './components/footprintCalculator';
import './styles/app.css';

function App() {
  const [isResultShowen,setIsResultShowen] = useState(false);
  const [allAnwers,setAllAnswers] = useState([]);
  const [footPrint,setFootPrint] = useState(0);
  
  useEffect(()=>{
    if(allAnwers.length > 0){
      setFootPrint(footprintCalculator(allAnwers))
    }                                       
  }
  ,[allAnwers])

  return (
    <main className='App'>
      <img className='top-image' src="/img1.png" alt="" />
      <img className='bottom-image' src="/img2.png" alt="" />
      <Questions setIsResultShowen={setIsResultShowen} setAllAnswers={setAllAnswers} />
      <Result isResultShowen={isResultShowen} setIsResultShowen={setIsResultShowen} footPrint={footPrint} />
    </main>
  )
}

export default App
