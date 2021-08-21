import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import TimerCounter from './timer/timer';

export const Page1 = () => {
     
    const [user,setUser] = useState([]);  
    var cancelled;
    useEffect(() => {
        cancelled = setTimeout(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data)
        },(errorMsg)=>{
            alert("Error");
        })
    }, 8000);
    }, [])

    function cancelAPI(){
        clearTimeout(cancelled);
    }

    return (
        <div className="container">
            <h2>API Users</h2>
            <Link to="/Page2">
            <button className="btn btn-primary" onClick={cancelAPI}>Go To Page - 2</button>
            </Link>
            <div className="row">
                <div className="col">
                    {
                        user.length > 0? <table className="table mt-3 table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Email</th>
                            </tr>
                            {
                                user.map(function(data,index){
                                    return <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.email}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table> : <h2>Data will be available in <TimerCounter/> sec</h2>
                    }
                </div>    
            </div>

        </div>
    )

    
}
