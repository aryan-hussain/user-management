import React, { useEffect, useState } from 'react'
import "./ListAndForm.css"

const ListAndForm = ({ showHide }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [data, setData] = useState([]);

    const users = JSON.parse(localStorage.getItem("users"));
    console.log("users", users);

    const addUserInfo = (index) => {
        setName(data[index].name);
        setEmail(data[index].email);
        setMobile(data[index].mobile);
        setDob(data[index].dob);
        setAddress(data[index].address);
    }

    useEffect(() => {
        setData(users);
    }, []);

    return (
        <>
            <section id='ListAndForm' style={{ backgroundColor: "white" }}>
                <div className='container'>
                    <div className='ListAndForm d-flex justify-c-c'>
                        <div className='ListItem'>
                            <ul>
                                <h2>Users</h2>
                                {data?.map((item, index) => {
                                    return (<>
                                        <li key={index} onClick={() => addUserInfo(index)}>{item.name}</li>
                                    </>)
                                })}

                            </ul>
                        </div>
                        <div className='Form'>
                            <div className='d-flex justify-c-sb'>
                                <h2>User Info</h2>
                                <button onClick={() => showHide(true)}>Add User</button>
                            </div>
                            <div className='d-flex justify-c-sb'>
                                <div><label>Name : </label></div>
                                <div><input value={name} type='text' onChange={(e) => setName(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>Email : </label></div>
                                <div><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>Mobile No. :</label></div>
                                <div><input type='text' value={mobile} id='mobile' onChange={(e) => setMobile(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>DOB :</label></div>
                                <div><input type="date" value={dob} id="birthday" onChange={(e) => setDob(e.target.value)} /></div>
                            </div>
                            <br />
                            <label>Address : </label> <br />
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea> <br /> <br />
                            <div>
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        </div>

                    </div>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default ListAndForm;
