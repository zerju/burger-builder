import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import cssClasses from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Jure Zerak',
        address: {
          street: 'Test street',
          zipCode: '2131',
          country: 'Zimbabwe'
        },
        email: 'jure@test.com'
      },
      deliveryMethod: 'Fastest'
    };
    axios.post('/orders.json', order).then((res) => {
      this.setState({ loading: false, purchasing: false });
      this.props.history.push('/');
    })
      .catch(err => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    let form = (<form>
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="email" placeholder="Your email" />
      <input type="text" name="street" placeholder="Your street" />
      <input type="text" name="postal" placeholder="Postal Code" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={cssClasses.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;