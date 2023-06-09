/* eslint-disable react/prop-types */
import '../styles/result.css';
import footprintCalculator from './footprintCalculator';

const Result = ({isResultShowen,setIsResultShowen, footPrint, tips}) => {
    return (
        <section className={`result ${isResultShowen && 'showen'}`} >
            <article className='top-article'>
                <h2>YOUR FOOTPRINT IS {footPrint.toFixed(2)} TONS/year</h2>
            </article>
            <article className='bottom-article'>
                <h2>QUICK TIPS TO DECREASE YOUR FOOTPRINT</h2>
                <ul>
                    {
                        tips.map((tip, index) => <li key={index}>{tip}</li>)
                    }
                </ul>
            </article>
            <button className='Retake' onClick={()=>setIsResultShowen(false)}>
                Retake the test
            </button>
        </section>
    )
}

export default Result