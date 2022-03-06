import React, { useState } from 'react'
import Select from 'react-select';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditProducts = () => {
    const [category, setCategory] = useState(null);
    const [editorState, setEditorState] = useState();
    const categoryOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Edit Products</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Product Name</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <input type="text" name="productName" id="productName" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>Product Category</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <Select value={category} onChange={setCategory} options={categoryOptions} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>Product Sub Category</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <Select value={category} onChange={setCategory} options={categoryOptions} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>Product Description</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="bg-white border"
                                        editorClassName="editorClass px-2"
                                        onEditorStateChange={setEditorState}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <p>Product Image</p>
                            </div>
                            <div className="col-md-8">
                                <img src="https://dummyimage.com/500x500/000/fff&text=Image" alt="product image" height="100px" width="100px" />
                                <input type="file" name="productImage" id="productImage" className="form-control my-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EditProducts