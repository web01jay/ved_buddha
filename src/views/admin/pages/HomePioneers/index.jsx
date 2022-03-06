import React from 'react'
import { Link } from 'react-router-dom'

const HomePioneers = () => {
  return (
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
                <div className='card'>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='card-title mb-0'>Pioneer Number: </p>
                            </div>
                            <div className="col-md-6">
                                <div className='text-right'>
                                    <Link to="/admin/home-pioneers/edit" className="btn btn-primary ml-2  ">
                                        Edit Pioneer
                                    </Link>        
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
                                <p>
                                    Pioneer Name
                                </p>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Description</p>
                            </div>
                            <div className='col-md-8'>
                                <p>
                                    Pioneer Description
                                </p>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Image</p>
                            </div>
                            <div className='col-md-8'>
                                <img src="https://dummyimage.com/500x500/000/fff&text=Image" alt="category image" height="100px" width="100px" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePioneers