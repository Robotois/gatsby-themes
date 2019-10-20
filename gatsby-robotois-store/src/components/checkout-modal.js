/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import { navigate } from 'gatsby';
import Modal from './modal';
import OxxoForm from './oxxo-form';

const buttonStyles = {
  width: 250,
  height: 52,
  borderRadius: 30,
  cursor: 'pointer',
  border: '4px solid #CCC',
  marginTop: 8,
};

class CheckoutModal extends React.Component {
  state = {
    showOxxoForm: false,
  };

  componentDidMount() {
    this.stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY, {
      betas: ['checkout_beta_4'],
    });
  }

  async redirectToCheckout(event) {
    event.preventDefault();
    const { sku } = this.props;
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `${process.env.GATSBY_STRIPE_SUCCESS_URL}`,
      cancelUrl: `${process.env.GATSBY_STRIPE_CANCEL_URL}`,
      billingAddressCollection: 'required',
    });
    if (error) {
      console.warn('Error:', error);
    }
  }

  createOxxoSource = async (data) => {
    try {
      const result = await this.stripe.createSource({
        type: 'oxxo',
        amount: 1099,
        currency: 'mxn',
        owner: {
          name: data.name,
          email: data.email,
          address: {
            city: data.city,
            country: 'MX',
            line1: data.address,
            line2: `${data.suburb}`,
            postal_code: data.zip,
            state: data.state
          }
        },
      });
      console.log(result);
      navigate('/oxxo', {
        state: { data: result },
        replace: true,
      });
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  onShowOxxoForm = () => {
    this.setState({
      showOxxoForm: true
    })
  }

  renderPaymentTypeButtons = () => {
    return (
      <>
        <h1>Elige tu forma de pago</h1>
        <button
          sx={{
            ...buttonStyles,
            fontFamily: 'system-ui, sans-serif',
            bg: '#3227b6',
            color: 'text',
            fontSize: 6,
          }}
          onClick={event => this.redirectToCheckout(event)}
        >
          Pago con tarjeta
        </button>
        <button
          sx={{
            ...buttonStyles,
            fontFamily: 'system-ui, sans-serif',
            fontSize: 6,
            color: 'white',
            bg: '#E21C2A',
            border: '4px solid #F0A929',
          }}
          onClick={this.onShowOxxoForm}
        >
          Pagar en OXXO
        </button>
      </>
    );
  }

  renderOxxoForm = () => {
    return <OxxoForm createOxxoSource={this.createOxxoSource} />
  };

  render() {
    const { sku, ...rest } = this.props;
    const { showOxxoForm } = this.state;
    return (
      <Modal {...rest}>
        <section
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {showOxxoForm ? this.renderOxxoForm() : this.renderPaymentTypeButtons()}
        </section>
      </Modal>
    );
  }
};

export default CheckoutModal;
