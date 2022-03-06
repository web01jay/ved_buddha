import React from 'react'

const EditPioneers = () => {
  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mb-0">Home Banner</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                <div className='card'>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-12">
                                <p className='card-title mb-0'>Pioneer Number: </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            
                            <div className="col-md-4">
                                <p>Pioneer Name</p>
                            </div>
                            <div className='col-md-8'>
                                <div className="from-group mb-3">
                                    <input type="text" name="pioneerName" id="pioneerName" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Description</p>
                            </div>
                            <div className='col-md-8'>
                                <div className="form-group mb-3">
                                    <input type="text" name="pioneerDescription" id="pioneerDescription" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <p>Pioneer Image</p>
                            </div>
                            <div className='col-md-8'>
                                <div className="form-group mb-3">
                                    <input type="file" name="pioneerImage" id="pioneerImage" className="form-control" />
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

export default EditPioneers