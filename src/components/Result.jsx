/* eslint-disable react/prop-types */
import '../styles/result.css';

const Result = ({isResultShowen,setIsResultShowen}) => {
    return (
        <section className={`result ${isResultShowen && 'showen'}`} >
            <article className='top-article'>
                <h2>YOUR FOOTPRINT IS 15.18 TONS</h2>
                <p>It takes 217 trees to offset your annual footprint</p>
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