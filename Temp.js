import Card from './Card';

function Temp(){
    // const data =['Shruti','Nikita','Sonali','Aneeza'];
    const data = [
        {
            name:'Shruti',
            age:21
        },
        {
            name:'Nikita',
            age:21
        },
        {
            name:'Sonali',
            age:21
        },
        {
            name:'Aneeza',
            age:21
        }
    ]
    return(
        <div>
            {data.map((value,index) =>(
                <Card temp={value}/>
            ))
            }
        </div>
    );
}
export default Temp;