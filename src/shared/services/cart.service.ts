import { CartProduct, OmitedProductCard } from '../store/cart-store'

export const cartService = {
  findExistingProduct: (productList: CartProduct[], productId: number) =>
    productList.some(({ id }) => id === productId),
  addProductToCart: (
    productList: CartProduct[],
    newProduct: OmitedProductCard,
  ) => {
    const existingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id,
    )

    if (existingProduct) {
      return productList.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
    }

    return [...productList, { ...newProduct, quantity: 1 }]
  },
}
