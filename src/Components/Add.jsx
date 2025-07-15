import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [input,changeinput]=useState(
        { id:"",userId:"",todo:""}
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
                        <div className="row g-3 p-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="text" className="form-control" name='id' value={input.id} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User ID</label>
                                <input type="text" className="form-control" name='userId' value={input.userId} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Todo</label>
                                <textarea id="" className="form-control" name='todo' value={input.todo} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Completed</label>
                                <select name="" id="" className="form-control">
                                    <option value="">True</option>
                                    <option value="">False</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add