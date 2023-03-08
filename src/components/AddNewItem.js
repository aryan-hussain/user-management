import React, { useState } from 'react'
import './AddNewItem.css'
const AddNewItem = ({ showHide }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const users = JSON.parse(localStorage.getItem("users"));
    const emailValid = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    const Add = () => {

        let user = []
        if (users?.length !== undefined) {
            user = [...users];
        }

        let userInfo = {
            name: name,
            email: email,
            mobile: mobile,
            dob: dob,
            address: address,
        }
        if (emailValid.test(email)) {
            user.push(userInfo);
            localStorage.setItem("users", JSON.stringify(user));
            showHide(false);
            alert("Added SuccessFull");
        } else {
            alert("not valid email");
        }


    }
    return (
        <>
            <section id='AddNewItem' style={{ backgroundColor: "white" }} >
                <div className='container'>
                    <div className='AddNewItem d-flex justify-c-c'>

                        <div className='Form'>
                            <h2>Add New User</h2>
                            <div className='d-flex justify-c-sb'>
                                <div><label>Name : </label></div>
                                <div><input type='text' onChange={(e) => setName(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>Email : </label></div>
                                <div><input type='text' onChange={(e) => setEmail(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>Mobile No. :</label></div>
                                <div><input type='text' id='mobile' onChange={(e) => setMobile(e.target.value)} /></div>
                            </div>
                            <br />
                            <div className='d-flex justify-c-sb'>
                                <div><label>DOB :</label></div>
                                <div><input type="date" id="birthday" onChange={(e) => setDob(e.target.value)} /></div>
                            </div>
                            <br />
                            <label>Address : </label> <br />
                            <textarea onChange={(e) => setAddress(e.target.value)}></textarea> <br /> <br />
                            <div>
                                <button onClick={() => Add()}>Add</button>
                            </div>

                        </div>

                    </div>
                    <hr />
                </div>

            </section>
        </>
    )
}

export default AddNewItem;