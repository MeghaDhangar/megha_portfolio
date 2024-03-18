import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return <div className="container-fluid footerBox">
        <div className="row d-flex align-items-center footer-box">
            <div className="col-lg-4">
                <div className="text-center mt-5">
                <h5><b>Megha's Developer</b></h5>
                <h5><b>Portfolio</b></h5>
                </div>
                <br/><br/>
                <div className="text-center input">
                <b>I'll Get Back To You !</b><br/>
                <form onSubmit={(event)=>event.preventDefault()}>
                <input type="text" required placeholder="Please Enter Your Email Id !" className="form-control mt-2 text-center inputBox col-lg-12" style={{width:"20vw", borderRadius:'15px', marginLeft:'5vw'}}/>
                <button className="btn mt-2">Click Me</button>
                </form>
                </div>
            </div>
            <div className="col-lg-4 text-center mt-5 quickLink1">
                <h5 className="ml-4"><b>Quick Link</b></h5>
                <br/>
                <span><Link to={'/'} style={{textDecoration:'none'}} className='footerLink'>👉 Home</Link></span>
                <br/><br/>
                <span><Link to={'/about'} style={{textDecoration:'none'}} className='footerLink'>👉 About</Link></span>
                <br/><br/>
                &nbsp;&nbsp;<span><Link to={'/projects'} style={{textDecoration:'none'}} className='footerLink'>👉 Projects</Link></span>
                <br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><Link to={'/contactUs'} style={{textDecoration:'none'}} className='footerLink'>👉 Contact Me</Link></span>
            </div>
            <div className="col-lg-4 text-center mt-1 quickLink2">
                <h5><b>Address</b></h5>
                <br/>
                <p>📌 Navalgaon, India</p>
                <p>🗨 +91 9691070767</p>
                <p>📩 meghadhangar1301@gmail.com</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center copyright">
            <p className='mt-3'>Copyright © meghaportfolio.com | All rights reserved</p>
            </div>
        </div>
    </div>
}