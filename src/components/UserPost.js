import React, { useEffect, useState } from 'react'

function UserPost() {
    const [posts, setPosts] = useState([]);
    // https://jsonplaceholder.typicode.com/posts

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            }
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            setPosts(result);
        })
    }, [])
    return (
        <div>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>UserPost </h3>
            {
                posts.map((item, index) => {
                    return (
                        <div key={index} style={{ borderBottom: "1px solid grey", width: "60%", margin: "auto" }}>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default UserPost;