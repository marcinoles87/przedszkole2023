import React from 'react'


const event = [ 
    {
        name : 'wyjscie do kina' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    } , 

    {
        name : 'Jasełka - śpiew , zabawa' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    },
    
    {
        name : 'Mikołaj - 2023' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    } ,

    {
        name : 'Jesienne zabawy na polu' ,
        data : '22-12-2023' ,
        month : 'Grudzien'
    }
]

function Events() {
  return (
    <div className='events-container'>
        <h1>Nadchodzące wydarzenia w naszym przedszkolu</h1>
        <div className='events-event'>
           
           <div>
            {event.map( (item) => {
                return(
                    <>
                     <h5>{item.month}</h5>
                     <p>{item.data} - {item.name}</p>
                    </>
                )
            })}
            </div>

            <div>
            {event.map( (item) => {
                return(
                    <>
                     <h5>{item.month}</h5>
                     <p>{item.data} - {item.name}</p>
                    </>
                )
            })}
            </div>

        </div>
    </div>
  )
}

export default Events