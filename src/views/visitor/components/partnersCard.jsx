import React from 'react'

const PartnersCard = (partnerImage, partnerName, partnerDescription) => {
  return (
    <>
        <div className="col-md-3">
            <div className="category-section d-block">
                <div className="image-container">
                    <img src={partnerImage} alt={partnerName} className="mw-100" />
                </div>
                <p className="category-title fs-20 font-weight-semi-bold">
                    {partnerName}
                </p>
                <p className="text-center">
                    {partnerDescription}
                </p>
            </div>        
        </div>
    </>
  )
}

export default PartnersCard