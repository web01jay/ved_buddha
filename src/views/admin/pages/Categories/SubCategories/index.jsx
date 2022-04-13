import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../../DataHelpers/API_URL'
import { useParams } from "react-router-dom";

const SubCategories = () => {
    const { sId } = useParams();
    const [subCategories, setSubCategories] = useState()
    const [isLoading, setIsLoading] = useState()

    useEffect(()=>{
        // API call using axios with get method
        axios({method: "get", url: `${API_URL}/product-sub-category?parentId=${sId}`, responseType: "stream"}).then  (response => {
            setIsLoading(true)
            setSubCategories(response.data.data)
            console.log(response.data.data, "response")
            console.log(subCategories, "subCategories")
            setIsLoading(false)
        }).catch(error => {console.log(error)})
    },[])

  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mb-0">Sub Categories</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-end w-100 text-right">
                            <Link to="/admin/sub-categories/add" className="btn btn-primary ml-2  ">
                                Add Sub Category
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
                            <div className="col-md-4">
                                <p className="mb-0">
                                    Sub Category Number
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p className="mb-0">
                                    Sub Category Name
                                </p>
                            </div>
                            {/* <div className="col-md-4">
                                <p className="mb-0">
                                    Parent Category Name
                                </p>
                            </div> */}
                            <div className="col-md-4">
                                <p className="mb-0">
                                    Actions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {subCategories && subCategories.map((subCategory, index) => {return(
                            <div className="py-2 mb-2 border-bottom" key={index}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="mb-0">
                                            {index + 1}
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="mb-0">
                                            {subCategory.name}
                                        </p>
                                    </div>
                                    {/* <div className="col-md-4">
                                        <p className="mb-0">
                                            Parent Category Name
                                        </p>
                                    </div> */}
                                    <div className="col-md-4">
                                        <Link to={`/admin/sub-categories/${subCategory.id}/edit`} className="btn">Edit</Link>
                                        <button className="btn ml-2">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubCategories