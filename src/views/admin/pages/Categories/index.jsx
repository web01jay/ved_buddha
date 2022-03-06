import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mb-0">Categories</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-end w-100 text-right">
                            <Link to="/admin/categories/add" className="btn btn-primary ml-2  ">
                                Add Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                <div className="card">
                    <div className='card-header'>
                        <div className="row">
                            <div className="col-md-2">
                                <p className="mb-0">
                                    Category Number    
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p className="mb-0">
                                    Category Name    
                                </p>
                            </div>
                            <div className='col-md-4'>
                                <p className="mb-0">
                                    Category Image    
                                </p>
                            </div>
                            <div className='col-md-2'>
                                <p className="mb-0">
                                    Actions
                                </p>
                            </div>
                        </div>    
                    </div>
                    <div className="card-body">
                        <div className="border-bottom py-2 mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <p>01</p>
                                </div>
                                <div className="col-md-4">
                                    <p>Categody Name</p>    
                                </div>
                                <div className="col-md-4">
                                    <img src="https://dummyimage.com/500x500/000/fff&text=Image" alt="category image" height="100px" width="100px" />
                                </div>
                                <div className="col-md-2">
                                    <button className="btn">Edit</button>
                                    <button className="btn ml-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories