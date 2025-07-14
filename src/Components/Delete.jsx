import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>


<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <div className="row p-5 g-5">


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Search Todo:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Submit</button>

                            </div>



                        </div>





                    </div>
                </div>
            </div>


    </div>
  )
}

export default Delete