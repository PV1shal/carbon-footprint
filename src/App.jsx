import { useEffect, useState } from 'react';
import Result from './components/Result';
import Questions from './components/questions';
import footprintCalculator from './components/footprintCalculator';
import './styles/app.css';
import axios from 'axios';

function App() {
  const [isResultShowen,setIsResultShowen] = useState(false);
  const [allAnwers,setAllAnswers] = useState([]);
  const [footPrint,setFootPrint] = useState(0);
  const [tips, setTips] = useState([]);
  
  useEffect(()=>{
    if(allAnwers.length > 0){
      let answersObj = {}
      for (let i = 0; i < allAnwers.length; i++) {
        answersObj[`question${i + 1}`] = allAnwers[i]
      }
      let data = JSON.stringify(answersObj);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://movie-recommender-api.vercel.app/recommend',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      
      setFootPrint(footprintCalculator(allAnwers))
      axios.request(config)
      .then((response) => {
        const tips = JSON.stringify(response.data.tips);
        const parsedTips = tips.replace("\"", "").split("\\n").map((tip) => tip.replace("-", '').trim())
        setTips(parsedTips)
        setFootPrint(footprintCalculator(allAnwers))
      })
      .catch((error) => {
        console.log(error);
      });
    }                                       
  }
  ,[allAnwers])




  return (
    <main className='App'>
      <img className='top-image' src="/img1.png" alt="" />
      <img className='bottom-image' src="/img2.png" alt="" />
      <Questions setIsResultShowen={setIsResultShowen} setAllAnswers={setAllAnswers} />
      <Result isResultShowen={isResultShowen} setIsResultShowen={setIsResultShowen} footPrint={footPrint} tips={tips} />
    </main>
  )
}

export default App
