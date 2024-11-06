import './Component1.css'



const Component1 = () => {

    const sampleData = [
        {
            id:1,
            task: 'Workout'
        },
        {
            id:2,
            task: 'Shopping'
        },
        {
            id:3,
            task: 'Dance Practice'
        },
        {
            id:4,
            task: 'Research'
        },
        {
            id:5,
            task: 'Waiting'
        }
    ]

    function getData(){
        return sampleData.map( (data)=> {
            return(
            <>
            <div className='name-field'>{data.id}:{data.task}</div>
            </>
            )
        })
    }

    let title = 'Hello';

    function getTitle(){
        return ( 

        <>{title + ' Hey'}</>

        ) ;
    }


    return (
        <div className='component-1'>
        <h1 className="component1">TO-DO Items</h1>

        <div className="data">{getData()}</div>

        </div>
    )
}

export default Component1;