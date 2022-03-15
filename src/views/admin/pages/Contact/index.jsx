import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';

const ContactList = () => {
    const [isLoading, setIsLoading] = useState()
    const [contactList, setContactList] = useState()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await axios(`${API_URL}/contact`)
            setContactList(result.data.data)
            setIsLoading(false)
            console.log(contactList, 'contactList')
        }
        fetchData()
    }, [])
  return (
    <section className='content-section'>
        <div className="container-fluid">
            <h1>Contact messages</h1>
        </div>
        <div className="content-body">
            {isLoading === true ? (
                <div className="py-5 text-center">Loading ...</div>
            ) : (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {contactList && contactList.map((contact, index) => { return (
                            <div className="card" key={index}>
                                <div className="card-header">
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <p className='mb-0'>Inquiry no. {contact.id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">Name</div>
                                        <div className="col-md-8">{contact.name}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">Subject</div>
                                        <div className="col-md-8">{contact.subject}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">Email</div>
                                        <div className="col-md-8">{contact.email}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">Message</div>
                                        <div className="col-md-8">{contact.message}</div>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
            )}
        </div>
    </section>
  )
}

export default ContactList