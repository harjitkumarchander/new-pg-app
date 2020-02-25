import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

function TempPagination() {
    const [ posts, setPosts ] = useState([]);
    const [ loading, setloading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(10);


    useEffect(()=>{
        const fetchPosts = async () =>{
            setloading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setloading(false);
        }
        fetchPosts();
    },[]);

    console.log(posts);

    //Get Current Post

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
     
    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Pagination</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalposts={posts.length} paginate={paginate} />
        </div>
    )
}
export default TempPagination;