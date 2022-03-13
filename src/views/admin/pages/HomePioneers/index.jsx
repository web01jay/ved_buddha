import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../../../DataHelpers/API_URL';

const HomePioneers = () => {
    const [pioneers, setPioneers] = useState([]);
    const [isLoading, setIsLoading] = useState()

    useEffect(()=>{
        setIsLoading(true)  
        // axios call
        axios({
            method: "get",
            url: `${API_URL}/pioneer`,
            responseType: "stream"
        }).then(function (response) {
            setIsLoading(true)
            setPioneers(response.data.data)
            console.log(response.data.data, "response")
            console.log(pioneers, "pioneers")
            setIsLoading(false)
        })
    },[])

    const deletePioneer = async (pioneerID) => {
        setIsLoading(true)
        await axios.delete(`${API_URL}/pioneer/${pioneerID}`)
            .then(res => alert(res.data.message))
            .catch(err => console.log({ err }))
            .finally(() => setIsLoading(false));
    }

  return (
      <>
      {isLoading === true ? (
          <div className="py-5 text-center">Loading ...</div>
      ) : (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mb-0">Home Pioneers</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-end w-100 text-right">
                            <Link to="/admin/home-pioneers/add" className="btn btn-primary ml-2  ">
                                Add Pioneers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                {pioneers && pioneers.map((pioneer, index)=>{return(
                <div className='card' key={index}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='card-title mb-0'>Pioneer Number: </p>
                            </div>
                            <div className="col-md-6">
                                <div className='text-right'>
                                    <Link to={`/admin/home-pioneers/${pioneer.id}/edit`} className="btn btn-primary ml-2  ">
                                        Edit Pioneer
                                    </Link>        
                                    <button className="btn btn-primary ml-2" onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this Pioneer?")) {
                                            deletePioneer(`${pioneer.id}`);
                                        }
                                    }}>
                                    Delete Banner
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            
                            <div className="col-md-4">
                                <p>Pioneer Name</p>
                            </div>
                            <div className='col-md-8'>
                                <p>{pioneer.name}</p>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Description</p>
                            </div>
                            <div className='col-md-8'>
                                <p>{pioneer.description}</p>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Image</p>
                            </div>
                            <div className='col-md-8'>
                                <img src={`${IMAGE_URL}/pioneer/${pioneer.image}`} alt="PioneerImage" height="100px" width="100px" />
                            </div>

                        </div>
                    </div>
                </div>
                )})}
            </div>
        </div>
    </section>
    )}
    </>
  )
}

export default HomePioneers