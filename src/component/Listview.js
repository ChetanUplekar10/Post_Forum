import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Userview from './Userview'

export default function Listview(props) {

    // const [posts, setPost] = useState([]);
    // const [filteredData,setFilteredData] = useState(posts);
    // const [users, setUser] = useState([]);


    // const handleSearch = (event) => {
    //     let value = event.target.value.toLowerCase();
    //     let result = [];
    //     result = posts.filter((data) => {
    //         return data.title.search(value) != -1;
    //     });

    //     setFilteredData(result);
    //     }


    // useEffect(()=>{

    //     const getPost = async() =>{
    //         const newpost = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>{
    //             setPost(res.data)
    //             setFilteredData(res.data);
    //         })
    //     }

    //     const getpostuser = async() =>{
    //         const newuser = await axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res=>{
    //             setUser(res.data)
    //         })
    //     }
    //     getpostuser();
    //     getPost();
    // }, [])


    // return (
    //     <div>
    //         <div className="container my-5">
    //             <h2 className="text-center">List View</h2>
    //             <div style={{marginTop: '5%', marginBottom: '5%',textAlign: 'right' }}>
    //                 <label><h6 className="mx-3">Search By Post</h6></label>
    //                 <input className="text-right p-1" placeholder="Serach By Post Title" type="text" onChange={(event) =>handleSearch(event)} />
    //             </div>
    //             <div className="row justify-content-center">
    //                {filteredData.map((postData)=>{
    //                    return(
    //                     <div className="col col-12 card p-4 m-3">
    //                         <h5 className="link-decoration"><Link to={{pathname:`/individualview/${postData.id}/comment`}} style={{ textDecoration: 'none', color: '#000' }}>{postData.title}</Link></h5>
    //                         {/* <p>{postData.body}</p> */}
    //                         {users.map((user, value)=>{
    //                             if(postData.userId==user.id){
    //                                 return <Link to ={{pathname:`/userview/${user.id}`}} style={{textAlign: 'right', textDecoration: 'none',}}><p key={user.id}>&#8212; {user.name}</p></Link>
    //                             }
    //                         })}
    //                      </div>
    //                    )
    //                })}
    //             </div>
    //         </div>
    //     </div>
    // )

    const [posts, setPost] = useState([]);
    const [filteredData,setFilteredData] = useState(posts);
    const [users, setUser] = useState([]);
    const [userData, setUserData] = useState(users);

    useEffect(()=>{

        const getPost = async() =>{
            const newpost = await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                setPost(res.data)
                setFilteredData(res.data);
            })
        }

        const getpostuser = async() =>{
            const newuser = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                setUser(res.data)
                setUserData(res.data)
            })
        }
        getpostuser();
        getPost();
    }, [])


        const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        result = users.filter((data) => {
            return data.name.search(value) != -1;
        });
        console.log(result, value)
        setUserData(result);
        }

    return(
        <div className="container mt-4">
            <div className="row">
            <h2 className="text-center">List View</h2>
                <div className="row justify-content-center">
                    <div style={{marginTop: '2%', marginBottom: '2%',textAlign: 'right' }}>
                        <label><h6 className="mx-3">Search By Post</h6></label>
                        <input className="text-right p-1" placeholder="Serach By Username" type="text" onChange={(event) =>handleSearch(event)} />
                     </div>
                    {userData.map((postData)=>{
                       return(
                        <div className="col col-12 p-4 m-3">
                            {filteredData.map((user)=>{
                                if(user.userId==postData.id){ 
                                    return (
                                        <div className="card mt-3 px-3 pt-4">
                                            <h5 className="link-decoration"><Link to={{pathname:`/individualview/${postData.id}/comment`}} style={{ textDecoration: 'none', color: '#000' }}>{user.title}</Link></h5>
                                            <Link to ={{pathname:`/userview/${user.id}`}} style={{textAlign: 'right', textDecoration: 'none',}}><p key={user.id}>{postData.name}</p></Link> 
                                        </div>
                                    )
                                }
                            })}
                         </div>
                       )
                   })}
                </div>
            </div>
        </div>
    )
}