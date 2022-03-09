import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL, IMAGE_URL } from '../../../DataHelpers/API_URL';

const Categories = () => {

    const [categories, setCategories] = useState()
    const [isLoading, setIsLoading] = useState()

    useEffect(()=>{
        setIsLoading(true)
        axios({
            method: "get",
            url: `${API_URL}/product-category`,
            responseType: "stream"
        }).then(function (response) {
            console.log(response.data.data)
            setCategories(response.data.data)
            console.log(categories, "categories")
        })
        setIsLoading(false)
    },[])

  return (
    <>
    {isLoading === true ? (
        <div className='py-5 text-center'>Loading</div>
    ) : (
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
                                <div className="col-md-3">
                                    <p className="mb-0">
                                        Category Name    
                                    </p>
                                </div>
                                <div className='col-md-3'>
                                    <p className="mb-0">
                                        Category Image    
                                    </p>
                                </div>
                                <div className='col-md-4'>
                                    <p className="mb-0">
                                        Actions
                                    </p>
                                </div>
                            </div>    
                        </div>
                        {categories && categories.map( (category, index) => { return (
                            <div className="card-body" key={index}>
                                <div className="border-bottom py-2 mb-2">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <p>{index + 1}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{category.name}</p>    
                                        </div>
                                        <div className="col-md-3">
                                            <img src={`${IMAGE_URL}/productCategory/${category.image}`} height="100px" width="100px" />
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/admin/sub-categories/${category.id}`} className="btn">View Sub Category</Link>
                                            <Link to={`/admin/categories/${category.id}/edit`} className="btn">Edit</Link>
                                            <button className="btn ml-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </section>
    )}
    </>
  )
}

export default Categories