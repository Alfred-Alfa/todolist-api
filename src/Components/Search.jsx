import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {    const [input,changeinput]=useState(
        { Deletetodo:""}
    )

       const inputhandler=(event)=>{
            changeinput( {...input,[event.target.name]:event.target.value} )
       }

       const readvalues=()=>{
        // clg
        console.log(input)
       }

  return (
    <div>

<Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row p-5 g-5">


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Delete Todo:</label>
                                <input type="text" className="form-control"  name='Deletetodo' value={input.Deletetodo} onChange={inputhandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readvalues}>Delete</button>

                            </div>



                        </div>





                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search