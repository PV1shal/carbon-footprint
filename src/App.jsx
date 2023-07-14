import { useEffect, useState } from 'react';
import Result from './components/Result';
import Questions from './components/questions';
import footprintCalculator from './components/footprintCalculator';
import './styles/app.css';
import axios from 'axios';
import { fetchRecommendation } from './components/chatgpt';

function App() {
  const [isResultShowen,setIsResultShowen] = useState(false);
  const [allAnwers,setAllAnswers] = useState([]);
  const [footPrint,setFootPrint] = useState(0);
  const [tips, setTips] = useState([]);
  const apikey = import.meta.env.VITE_KEY
  const setRecommendations = (answersObj)=>{
    fetchRecommendation(apikey,answersObj).then(data=>
      {
        const inputString = data;
        setFootPrint(footprintCalculator(allAnwers))
        const recommendations = inputString.split(/\d+\.\s+/).slice(1);
        setTips(recommendations);
        console.log(recommendations);
      }
      
      ).catch(e=>setTips(e));
    }
    
    useEffect(()=>{
      if(allAnwers.length > 0){
        setFootPrint(footprintCalculator(allAnwers))
        let answersObj = {}
      for (let i = 0; i < allAnwers.length; i++) {
        answersObj[`question${i + 1}`] = allAnwers[i]
      }
      setRecommendations(answersObj);
    }         

  }
  ,[allAnwers])



  useEffect(()=>{
    if(!isResultShowen){
      setTips([])
    }
  },[isResultShowen])
  return (
    <main className='App'>
      <div className="container">
      <Questions setIsResultShowen={setIsResultShowen} setAllAnswers={setAllAnswers} />
      <Result isResultShowen={isResultShowen} setIsResultShowen={setIsResultShowen} footPrint={footPrint} tips={tips} />

      </div>
    </main>
  )
}

export default App
