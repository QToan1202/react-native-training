import styles from './checkout.module.css'

/* eslint-disable-next-line */
export interface CheckoutProps {}

export function Checkout(props: CheckoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Checkout!</h1>
    </div>
  )
}

export default Checkout
