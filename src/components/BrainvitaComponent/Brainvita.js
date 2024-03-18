import React from 'react'
import './brainvita.css'
function Brainvita() {
  return (
    <>
      <div className="container-fluid clinicBox">
        <div className="row mt-5 text-center">
        <div className="col-12">
        <h1>Brainvita Game Details</h1>
        </div>
        </div>
        <div className='container mt-5 clinicInnerBox'>
        <div className='row text-center'>
            <div className='col-12'>
                <h4>Summary</h4>
                <p className='mt-1'>
                    Implementing a Brainvita game involves designing the board, managing the pegs and their movements, checking for valid moves,and determining the winning conditon
                     </p>

                <h4 className='mt-5'>Technology Used</h4>
                <p className='mt-1'>Java, Java Swing</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Brainvita
