import { Link } from 'react-router-dom'
import './project.css'

export default function Project(){

    let projectData = [
        {img : 'img/hospi.png', name : 'Hospital Appointment Booking Application', msg : 'Click For More Details', path : '/hospital'},
        {img : 'img/weather.png', name : 'Weather App', msg : 'Click For More Details', path : '/weatherapp'},
        {img : 'img/task.png', name : 'Student Task Manager', msg : 'Click For More Details', path : '/taskmanager'},
        {img : 'img/portfalio.png', name : 'My Portfolio Website', msg : 'Click For More Details', path : '/myPortfolio'},
        {img : 'img/news.png', name : 'NewsList', msg : 'Click For More Details', path : '/newslist'},
        {img : 'img/brainvita.png', name : 'The Brainvita Game', msg : 'Click For More Details', path : '/brainvitagame'},
    
    ]
        let projectComponent = (ob) =>{
            
        }

    return <div className="container-fluid projectBox">
        <div className='row'>
        <div className='col-12 text-center mt-5'>
        <h1>Project's List</h1>
        </div>
        <div className='container projectIcon'>
            <div className='row text-center a'>
             {projectData.map(obj=><div className='col-3 imgBox' onClick={()=>projectComponent(obj)}>
             <Link to={obj.path} style={{textDecoration:'none'}}>
                <img src={obj.img} height={170} style={{borderRadius:'2px'}}/>
                <h4 className='mt-3'>{obj.name}</h4>
                <p>{obj.msg}</p>
                </Link>
             </div>)}
        </div>
        </div>
        </div>
    </div>
}