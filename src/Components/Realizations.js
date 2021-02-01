import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "../Components/Pages/Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "../Components/Pages/Photos";
import '../Components/Styles/Realizations.css'
import { Route } from 'react-router-dom';




function Realizations() {
   
    
        
        return (
          <>
                  <div className = "offer-container">
                    <h2 style={{color: "#434343"}}>Portfolio</h2>
                    <div className = "galery">
                    <Gallery photos={photos} direction={"column"} />
                    </div>
                    
                </div>
                
                </>
                
              
        );
    }


export default Realizations;