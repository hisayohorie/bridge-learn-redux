export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCT',
  deleteProduct: 'DELETE_PRODUCT',
}

export function addProduct(product) {
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function deleteProduct(product){
  return {
    type: ACTION_TYPES.deleteProduct,
    payload: {
      product,
    }
  }
}
