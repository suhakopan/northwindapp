import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'
import { Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " deleted from cart")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(i => (
                            <tr key={i.product.id}>
                                <th scope="row">{i.product.id}</th>
                                <td>{i.product.productName}</td>
                                <td>{i.product.unitPrice}</td>
                                <td>{i.quantity}</td>
                                <td><Button onClick={() => this.removeFromCart(i.product)} color="danger">-</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
