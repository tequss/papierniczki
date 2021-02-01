import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "../Components/Pages/Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "../Components/Pages/Photos";
import '../Components/Styles/Realizations.css'

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));



function Realizations() {
   
    const [items, setItems] = useState(photos);

        const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
      };
        
        return (
                  <div className = "offer-container">
                    <h2 style={{color: "#434343"}}>Portfolio</h2>
                    <div className = "galery">
                    <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
                   
                    </div>
                </div>
                
              
        );
    }


export default Realizations;