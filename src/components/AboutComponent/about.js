import { Link } from 'react-router-dom'
import './about.css'

export default function About() {
    return <div className="container aboutBox">
        <div className="row text-center sectionOne">
            <div className='col-lg-12'>
                <h1 className='text-center mt-5'>Education Details</h1>
                <img src='img/about2.jpg' className='img' />
            </div>
        </div>
        <div>

        </div>


        <div className='container-fluid tableBox'>
            {/* <div className='col-lg-12 d-flex justify-content-center mt-5'>
                <h5>About Me</h5>
            </div> */}
            <div className="container-fluid calBox">
                <div className="row mt-5 text-center">
                </div>
                <div className='container mt-5 calInnerBox'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h3>Proficient in HTML, CSS,Bootstrap, React , Javascript, to build dynamic and responsive web
                                applications. extensive experience in core Java concepts and objectoriented programming also has proficiency in Javascript and its
                                frameworks such as React. Eager to contribute my technical knowledge to
                                a collaborative development team while continuously expanding my skill
                                set.
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
}