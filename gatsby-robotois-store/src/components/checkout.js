/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
const styles = {
  width: 200,
  height: 52,
  borderRadius: 30,
  fontSize: 3,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1,
  cursor: 'pointer',
  border: 'none',
};

const Checkout = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe(process.env.STRIPE_PUBLIC_KEY, {
      betas: ['checkout_beta_4'],
    });
  }
  async redirectToCheckout(event) {
    event.preventDefault();
    const { sku } = this.props;
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
      billingAddressCollection: 'required',
    });
    if (error) {
      console.warn('Error:', error);
    }
  }
  render() {
    const { type } = this.props;
    return (
      <button
        sx={{
          ...styles,
          variant: `buttons.${type}` || 'button.primary',
        }}
        onClick={event => this.redirectToCheckout(event)}
      >
        Comprar kit
      </button>
    );
  }
};
export default Checkout;
