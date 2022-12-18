import React from 'react'
import { useState,useEffect } from 'react';
import './contact.css';

const getDatafromLS = () => {
  const data = localStorage.getItem('datas');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

function Contact() {
  
  const [datas, setdatas] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');

  const handleAddDataSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let info = {
      name,
      email,
      phoneNo,
      message
    }
    setdatas([...datas, info]);
    setName('');
    setEmail('');
    setPhoneNo('');
    setMessage('');
    alert('Your response has been submitted successfully');
  }

  const deleteData = (rollno) => {
    const filteredDatas = datas.filter((element, index) => {
      return element.rollno !== rollno
    })
    setdatas(filteredDatas);
  }

  useEffect(() => {
    localStorage.setItem('datas', JSON.stringify(datas));
  }, [datas])
  


  return (
    <>
    <div className="container">
        <form className="form" onSubmit={handleAddDataSubmit}>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="input" placeholder="Full Name" required></input>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="input" placeholder="Email" required></input>
            <input onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} type="Number" className="input" placeholder="Phone No" required></input>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="text-area" rows={6} cols={8} placeholder="Type your message here !!!" required></textarea>
            <button type="submit" className="submit">SUBMIT</button>
        </form>
    </div>
    </>
  );
}

export default Contact;