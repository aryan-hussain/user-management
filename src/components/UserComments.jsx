import React, { useEffect, useState } from 'react'

function UserComments() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
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
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>User Comments </h3>
            {
                posts.map((item, index) => {
                    return (
                        <div key={index} style={{ borderBottom: "1px solid grey", width: "60%", margin: "auto" }}>
                            <h4>{item.name}</h4>
                            <h5>{item.email}</h5>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default UserComments;