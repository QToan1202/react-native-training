import styles from './product.module.css'

/* eslint-disable-next-line */
export interface ProductProps {}

export function Product(props: ProductProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Product!</h1>
    </div>
  )
}

export default Product
