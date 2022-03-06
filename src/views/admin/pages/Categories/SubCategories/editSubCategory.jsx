import React, { useState } from 'react'
import Select from 'react-select';

const EditSubCategory = () => {
    const [category, setCategory] = useState(null);
    const categoryOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <section className="content-section">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Edit Sub Categories</h1>
                    </div>
                </div>
            </div>
        </div>   
        <div className="content-body">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <p className="card-title mb-0">
                            Edit Sub Category
                        </p>
                    </div>
                    <div className="card-body">
                        
                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Sub Category Name
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <input type="text" name="subCategoryName" id="subCategoryName" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Parent Category Name
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <Select value={category} onChange={setCategory} options={categoryOptions} />
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

export default EditSubCategory