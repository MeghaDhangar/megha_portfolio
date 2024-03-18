import './home.css'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigate = useNavigate()
    return <div className='container-fluid homeBox'>
        <div className='row d-flex align-items-center'>
        <div className='col-lg-6 text-center'>
            <h1>Hi, My name is Megha Dhangar</h1>
            <h1>and I am a passionate</h1>
            <h1> Full Stack Developer.</h1>
            <br/>
            <button className='btn' onClick={()=>window.open('https://linkedin.com/in/meghadhangar1301')}>Visit LikedIn</button> &nbsp; &nbsp; 
            <button className='btn' onClick={()=>window.open('https://github.com/MeghaDhangar')}>Visit Github</button>
        </div>
        <div className='col-lg-6 text-center'>
            <img src='img/girl.jpg' height={500} style={{borderRadius:'160px', marginTop:60, border:'3px solid '}}/>
        </div>
        </div>
    </div>
}