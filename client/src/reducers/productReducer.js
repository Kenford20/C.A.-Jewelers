import { ADD_PRODUCT_PAGE_INFO } from '../actions/types';

const initialState = {
    productId: 'productId',
    productUrl: '/',
    imgUrl: "https://s3.amazonaws.com/media-cajewelers.com/BeadSet-resized.jpg",
    productName: "14K Gold Marquise Halo Engagement Ring",
    price: 1234,
    description: "In laoreet lacus metus, non facilisis elit semper sed.",
    categoryRouteName: "engagement rings",
    subcategoryRouteName: "halo",
    subcategoryRoute: "/engagement-rings/halo-rings/"
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCT_PAGE_INFO: 
            console.log(action.payload)
            return {
                ...state,
                productId: action.payload.productId,
                productUrl: action.payload.productUrl,
                imgUrl: action.payload.imgUrl,
                productName: action.payload.productName,
                price: action.payload.price,
                description: action.payload.description,
                categoryRouteName: action.payload.categoryRouteName,
                subcategoryRouteName: action.payload.subcategoryRouteName,
                subcategoryRoute: action.payload.subcategoryRoute
            } 
            
        default: return state;
    }
}