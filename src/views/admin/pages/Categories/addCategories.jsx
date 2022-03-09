import React from 'react'

const AddCategories = () => {
  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Add Categories</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                <div className="card">
                    <div className='card-header'>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="card-title mb-0">
                                    Category Number:     
                                </p>
                            </div>
                        </div>    
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Category Name    
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-8">
                                    <div className="form-group mb-3">
                                        <input type="text" name="categoryName" id="categoryName" className="form-control" />
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p>Category Image</p>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-8">
                                    <div className="form-group mb-3">
                                        <input type="file" name="categoryImage" id="categoryImage" className="form-control" />
                                    </div>
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

export default AddCategories