import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [tododata,changetododata]=useState(
        {"todos":[]}
    )
            const fetchData=()=>{
            axios.get(
               "https://dummyjson.com/todos"
            ).then(
                (response)=>{
                    changetododata(response.data)
                }
            ).catch()
        
    }
    useEffect(()=>{fetchData()},[])
  return (

    <div>
        <Navbar/>
                <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row g-5 p-5">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">User ID</th>
                                        <th scope="col">Todo</th>
                                        <th scope="col">Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tododata.todos.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.userId}</td>
                                                    <td>{value.todo}</td>
                                                    <td>{value.completed ? "Yes" : "No"}</td>
                                                
                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>




    </div>
  )
}

export default View