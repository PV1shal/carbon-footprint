/* eslint-disable react/prop-types */
import '../styles/result.css';
import footprintCalculator from './footprintCalculator';

const Result = ({isResultShowen,setIsResultShowen, footPrint}) => {
    return (
        <section className={`result ${isResultShowen && 'showen'}`} >
            <article className='top-article'>
                <h2>YOUR FOOTPRINT IS {footPrint.toFixed(2)} TONS/year</h2>
            </article>
            <article className='bottom-article'>
                <h2>QUICK TIPS TO DECREASE YOUR FOOTPRINT</h2>
                <ul>
                    <li>
                        Tip #1
                    </li>
                    <li>
                        Tip #2
                    </li>
                    <li>
                        Tip #3
                    </li>
                    <li>
                        Tip #4
                    </li>
                    <li>
                        Tip #5
                    </li>
                    <li>
                        Tip #6
                    </li>
                    <li>
                        Tip #7
                    </li>
                    <li>
                        Tip #8
                    </li>
                </ul>
            </article>
            <button className='Retake' onClick={()=>setIsResultShowen(false)}>
                Retake the test
            </button>
        </section>
    )
}

export default Result