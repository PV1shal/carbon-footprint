/* eslint-disable react/prop-types */
import '../styles/result.css';

const Result = ({isResultShowen,setIsResultShowen, footPrint, tips}) => {
    const num = isNaN(footPrint.toFixed(2))? 19.58 : footPrint.toFixed(2);
    return (
        <section className={`result ${isResultShowen && 'showen'}`} >
            <article className='top-article'>
                <h2>YOUR FOOTPRINT IS {
                    num
                } TONS/year</h2>
                <p>{(num > 16) ? '⚠️ Your carbon footprint is higher than the US average of 16 TONS/year':'Your carbon footprint is lower than US average of 16 TONS/year ♻️'}</p>
            </article>
            <article className='bottom-article'>
                <h2>QUICK TIPS TO DECREASE YOUR FOOTPRINT</h2>
                <ul>
                    {
                        tips.length > 0 ? tips.map((tip, index) => <li key={index}>{tip}</li>) : <div className="ring"></div>
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