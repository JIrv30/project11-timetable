import { useState } from 'react'
import question from './question'

export default function Questions () {
  const [selected, setSelected] = useState({})

  function toggle (qNumber, option) {
   setSelected(prevState => ({
    ...prevState,
    [qNumber] : option
    }
    )) 
  }

  const questionElements = question.map(q=>{
    
    return (
      <div key={q.number} className='question-box'>
        <div>{q.catagory}</div>
        <div>{q.question}</div>
        <div className='options'>
         
         <button 
         className='btn-yes'
         style={{backgroundColor: selected[q.number] === 'yes' ? 'green' : undefined}}
         onClick={()=>toggle(q.number,'yes')}
         > Yes </button>
         
         <button 
         className='btn-no'
         style={{backgroundColor: selected[q.number] === 'no' ? 'red' : undefined}}
         onClick={()=>toggle(q.number,'no')}
         > No </button>
         
         <button 
         className='btn-na'
         style={{backgroundColor: selected[q.number] === 'na' ? 'blue' : undefined}}
         onClick={()=>toggle(q.number,'na')}
         > N/A</button>
        </div>
      </div>
    )
  })


  return (
    <>
    {questionElements}
    </>
  )
}