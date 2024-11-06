import './Component2.css'

function Component2(){

    const sampleTexts = [
        {
            id:1,
            task: 'Hellow World'
        },
        {
            id:2,
            task: 'How are you'
        },
        {
            id:3,
            task: 'How are you doing'
        },
        {
            id:4,
            task: 'I am the best'
        },
        {
            id:5,
            task: 'Welcome'
        }
    ]

    function getData(){
        return sampleTexts.map( (data)=> {
            return(
            <>
            <div className='name-field'>{data.id}:{data.task}</div>
            </>
            )
        })
    }

    return (
        <div className='component-2'>
        <h1 className="component2">List of Texts</h1>

        <div className="data">{getData()}</div>
        </div>
    )
}

export default Component2;