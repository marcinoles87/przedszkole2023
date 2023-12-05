import React from 'react'

const event = [ 
    {
        name : 'wyjscie do kina' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    } , 

    {
        name : 'wyjscie do kina' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    },
    
    {
        name : 'wyjscie do kina' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    } ,

    {
        name : 'wyjscie do kina' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    }
]

function Events() {
  return (
    <div className='events-container'>
        <h1>Nadchodzące wydarzenia w naszym przedszkolu</h1>
        <div className='events-event'>
            <h2>Grudzien : </h2>
            {event.map( (item) => {
                return(
                    <>
                     <h3>{item.month}</h3>
                     <p>{item.data} - {item.name}</p>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Events