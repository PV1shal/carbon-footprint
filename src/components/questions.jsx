import { useEffect, useState } from 'react';
import { AiFillHome,AiFillCar } from 'react-icons/ai';
import { BsFillAirplaneFill,BsCheck2 } from 'react-icons/bs';
import '../styles/questions.css';




const Questions = () => {
    const [progress,setProgress] = useState(0);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [answers,setAnswers] = useState(['','','','','','',[],[],'','','','',''])
    const questions = [
        {
            type:'radio',
            question:'what is the Number of residents including yourself?',
            options:['1','2','3','4','5','6+']
        },
        {
            type:'radio',
            question:'which one do you live in?',
            options:
                ['Detached single family home',
                'Attached single family home',
                'Apartment Building (2 to 4 units)',
                'Apartment Building (5+ units)',
                'Mobile Home']
        },
        {
            type:'radio',
            question:'what is the size of housing?',
            options:
                ['Under 500 sq ft',
                '500-999',
                '1,000-1,499',
                '1,500-1,999',
                '2,000-2,499',
                '2,500-2,999',
                '3,000-3,999',
                'Over 4000'
            ]
        },
        {
            type:'radio',
            question:'Do you purchase clean energy such as wind or solar?',
            options:
                ['Yes, some',
                'Yes, most',
                'Yes, all',
                'No (US Average)',
                "I don't know"
            ]
        },
        {
            type:'radio',
            question:'Do you recycle items such as metal, plastic, glass, or paper?',
            options:
            ['Yes','NO']
        },
        {
            type:'radio',
            question:'Your diet is mostly',
            options:
            ['Meat Lover',
            'Average omnivore (US Average)',
            'No beef',
            'Vegetarian',
            'Vegan']
        },
        {
            type:'check',
            question:'Do you make a conscious effort to save energy? Check all that apply.',
            options:[
            'I have a programmable thermostat',
            'I use ENERGY STAR appliances',
            'I use energy efficient lightbulbs',
            'I line dry my laundry'
        ]
        },
        {
            type:'check',
            question:'Select all of the ways you travel',
            options:[
            'Intercity/Commuter Rail',
            'Bus/Subway/Metro',
            'Car',
            'Bike/Walk'
        ]
        },
        {
            type:'radio',
            question:'Average total weekly travel',
            options:
            [
                'Under 5 miles',
                'Under 5 to 9.9 miles',
                '10 to 14.9 miles',
                '15 to 19.9 miles',
                '20 to 29.9 miles',
                '30+ miles',
            ]
        },
        {
            type:'radio',
            question:'Number of long round-trip flights (2500+ miles) I make in a year',
            options:
            [
                '0 (US Average)',
                '1',
                '2',
                '3',
                '4',
                '5 to 9',
                '10 to 14',
                '15 to 19',
                '20+'
            ]
        },
        {
            type:'radio',
            question:'Number of medium round-trip flights (300-2500 miles one way) I make in a year',
            options:
            [
                '0',
                '1 (US Average)',
                '2',
                '3',
                '4',
                '5 to 9',
                '10 to 14',
                '15 to 19',
                '20+'
            ]
        },
        {
            type:'radio',
            question:'Number of short round-trip flights (<300 miles one way) I make in a year',
            options:
            [
                '0',
                '1 (US Average)',
                '2',
                '3',
                '4',
                '5 to 9',
                '10 to 14',
                '15 to 19',
                '20+'
            ]
        },
        {
            type:'radio',
            question:'Average number of nights spent in a hotel per year',
            options:
            [
                '0',
                '1 to 2 Nights',
                '3-4 Nights',
                '5-6 Nights (US Average)',
                '1-2 Weeks',
                '3-4 Weeks',
                '1-2 Months'
            ]
        },
    ]

    function handleSubmit(e){
        e.preventDefault()
        if(answers[currentQuestion].length === 0){
            // setAlertData({type:'warrning',showen:true,msg:'make sure to answer the question'})
        }else {
            console.log(answers)
        }
    }

    function handleChoose(qi,oi,type){
        if(type === 'radio'){
            setAnswers(prev => {
                let newArr = [...prev]
                if(newArr[qi] === questions[qi].options[oi]){
                    newArr[qi] = ''
                }else {
                    newArr[qi] = questions[qi].options[oi]
                }
                return newArr
            })
        }else {
            setAnswers(prev => {
                let newArr = [...prev]
                if(newArr[qi].includes(questions[qi].options[oi])){
                    let newOptions = newArr[qi].filter(e => e !== questions[qi].options[oi])
                    newArr[qi] = newOptions
                    return newArr
                }else {
                    newArr[qi].push(questions[qi].options[oi])
                    return newArr
                }
            })
        }
    }



    function handleNext(e,currentQuestion,answers){
        e.preventDefault()
        if(answers[currentQuestion] === ''){
            // setAlertData({type:'warrning',showen:true,msg:'make sure to answer the question'})
        }else {
            setCurrentQuestion(prev => {
                if(prev < questions.length - 1){
                    return prev + 1
                } else {
                    return prev
                }
            });
        }
    }
    function handleBack(e){
        e.preventDefault()
        setCurrentQuestion(prev => {
            if(prev > 0){
                return prev - 1
            }else {
                return prev
            }
        });
    }

    useEffect(()=>{
        if(currentQuestion <= 6){
            setProgress(0)
        }else if(currentQuestion <= 8){
            setProgress(50)
        }else {
            setProgress(100)
        }
    },[currentQuestion])
    return (
        <>
            <div className='progress' style={{'--i':`${progress}%`}} onClick={()=>setProgress(prev => prev + 50)}>
                <span className={`icons ${progress >= 0 && 'active'}`}>{AiFillHome({})}</span>
                <span className={`icons ${progress >= 1 && 'active'}`}>{AiFillCar({})}</span>
                <span className={`icons ${progress >= 51 && 'active'}`}>{BsFillAirplaneFill({})}</span>
            </div>
            <article className='questions'>
                <div className='holder'>
                    <form action="" style={{transform:`translateX(-${currentQuestion * 460}px)`}}>
                        {questions.map((e,i)=>{
                            if(e.type === 'radio'){
                                return <div className='question' key={i}>
                                    <h2 className='text'>{e.question}</h2>
                                    {e.options.map((ele,index)=>{
                                        return <p key={index} onClick={()=>handleChoose(i,index,e.type)}>
                                            <span className={`bullet ${answers[i]=== ele && 'choosen'}`}></span>
                                            <span className='option'>{ele}</span>
                                        </p>
                                    })
                                    }
                                    <button className='back' onClick={handleBack}>Back</button>
                                    {i === questions.length-1?
                                        <button className='next' onClick={(e)=>handleSubmit(e)}>Submit</button>
                                    :
                                        <button className='next' onClick={(e)=>handleNext(e,currentQuestion,answers)}>Next</button>
                                    }
                                </div>
                            }else {
                                return <div className='question' key={i}>
                                    <h2 className='text'>{e.question}</h2>
                                    {e.options.map((ele,index)=>{
                                        return <p key={index} onClick={()=>handleChoose(i,index,e.type)}>
                                            <span className={`check ${answers[i].includes(ele) && 'choosen'}`}>
                                                {answers[i].includes(ele) && <BsCheck2 />}
                                            </span>
                                            <span className='option'>{ele}</span>
                                        </p>
                                    })
                                    }
                                    <button className='back' onClick={handleBack}>Back</button>
                                    {i === questions.length-1?
                                        <button className='next' onClick={(e)=>handleSubmit(e)}>Submit</button>
                                    :
                                        <button className='next' onClick={(e)=>handleNext(e,currentQuestion,answers)}>Next</button>
                                    }
                                </div>
                            }
                        })
                        }
                    </form>
                </div>
            </article>
        </>
    )
}

export default Questions