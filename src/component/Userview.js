import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

export default function Userview(props) {
    const {id} = props.match.params
    const[details, setDetail] = useState([])
    useEffect(()=>{

        const getDetail = async() =>{
            const userData= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setDetail(userData.data)
        }
        getDetail();
    }, [])

    console.log("User",details)
    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col card col-12">
                    <div className="my-4 text-center">
                        <h2>User Detail</h2>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Link style={{textDecoration:'none', color:'#000'}} to='/'><h1>&#8592;</h1></Link>
                    </div>
                    <div className="p-3 text-left">
                        <h5 className="my-4">UserName: {details.username}</h5>
                        <h5 className="my-4">FullName: {details.name}</h5>
                        <h5 className="my-4">Email: {details.email}</h5>
                        <h5 className="my-4">Website: {details.website}</h5>
                        {/* <h5 className="my-2">Detail Of the Company:</h5>
                        <h6>Company Name: {details.company.name}</h6>
                        <h6>CatchPhrase: {details.company.catchPhrase}</h6>
                        <h6>Service: {details.company.bs}</h6> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
