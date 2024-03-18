import React from 'react'
import './newslist.css'
function Newslist() {
    return (
        <>
            <div className="container-fluid calBox">
                <div className="row mt-5 text-center">
                    <div className="col-12">
                        <h1>NewsList Details</h1>
                    </div>
                </div>
                <div className='container mt-5 calInnerBox'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h4>Summary</h4>
                            <p className='mt-1'> I had a project where I needed to display 100 news articles on each page using an API, with 10 articles shown per page. Could you please help with this? </p>

                            <h4 className='mt-5'>Technology Used</h4>
                            <p className='mt-1'> ReactJs , Hooks </p>

                            <h4 className='mt-5'>GitHub Link</h4>
                            <p className='mt-1'>https://github.com/MeghaDhangar/NewsListt</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Newslist
