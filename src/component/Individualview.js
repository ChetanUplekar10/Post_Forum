import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Listview from './Listview';

export default function Individualview(props) {
    const {id} = props.match.params
    console.log(props)
    const[details, setDetail] = useState([])
    console.log(id)
    useEffect(()=>{

        const getDetail = async() =>{
            const commentData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            setDetail(commentData.data)
        }
        getDetail();
    }, [])

    console.log(details)

    return (
        <div className="container my-5">
            <div>
                <h2 className="text-center mb-5">Comments / (Individual Post View)</h2>
            </div>
            <div style={{textAlign: 'right'}}>
                <Link style={{textDecoration:'none', color:'#000'}} to='/'><h1>&#8592;</h1></Link>
            </div>
            <div>
            <div className="row justify-content-center">
                {details.map((comments)=>{
                    return(
                            <div className="col col-5 card p-3 my-3 mx-2">
                                <h6>Name: {comments.name}</h6>
                                <h6>Email: {comments.email}</h6>
                                <h6>comment: {comments.body}</h6>
                            </div>
                    )
                }
                )} 
                </div>
            </div>
        </div>
    )
}
