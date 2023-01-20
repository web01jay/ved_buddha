import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_URL, IMAGE_URL } from '../../../DataHelpers/API_URL'
import PartnersCard from '../../components/partnersCard'
import DefaultImage from "../../assets/images/slide01.jpg"

const PartnersPioneers = () => {
    const [partners, setPartners] = useState([])
    const [isLoading, setIsLoading] = useState()
    useEffect(() => {
        setIsLoading(true)  
        // axios call
        axios({
            method: "get",
            url: `${API_URL}/pioneer`,
            responseType: "stream"
        }).then(function (response) {
            setIsLoading(true)
            setPartners(response.data.data)
            console.log(response.data.data, "response")
            console.log(partners, "pioneers")
            setIsLoading(false)
        })
    }, [])
  return (
    <>
        {isLoading === true ? (
            <p className="py-5 text-center">Loading ...</p>
        ) : (
            <>
                <div className="row">
                    {partners && partners.map( (partner, index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                {/* <PartnersCard 
                                    partnerImage={`${IMAGE_URL}/pioneer/${partner.image}`}
                                    partnerName={partner.name}
                                    partnerDescription={partner.description}
                                /> */}
                                <div className="category-section d-block">
                                    <div className="image-container">
                                        {partner.image == null 
                                            ? <img src={DefaultImage} alt={partner.name} className="mw-100" />
                                            : <img src={`${IMAGE_URL}/pioneer/${partner.image}`} alt={partner.name} className="mw-100" />
                                        }
                                    </div>
                                    <p className="category-title fs-20 font-weight-semi-bold">
                                        {partner.name}
                                    </p>
                                    <p className="text-center">
                                        {partner.description}
                                    </p>
                                </div>
                            </div>
                        )
                    } )}
                </div>
            </>
        )}
    </>
  )
}

export default PartnersPioneers