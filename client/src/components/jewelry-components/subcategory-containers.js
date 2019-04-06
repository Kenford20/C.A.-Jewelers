import React from 'react';

const SubcategoryContainer = ({ id, route, imgId, imgUrl, description, subName }) => {
    return ( 
        <div className="jewelry-sub-container" id={ id }>
            <a href={ route }>
                <img src={ imgUrl } id={ imgId }></img>
            </a>
            <div className="jewelry-containers">
                <h4 className="jewelry-caption-header"> C.A. { subName } </h4>
                <p>{ description }</p>
                <a href={ route }><h5 className="jewelry-caption-text"> Shop for { subName } </h5></a>
            </div>
        </div>
     );
}
 
export default SubcategoryContainer;