import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class ProductList extends Component {
	componentDidMount() {
		this.props.actions.getProducts()
	}
	addToCart=(product)=>{
		this.props.actions.addToCart({quantity:1, product})
		alertify.success(product.productName + " added to cart")
	}
	render() {
		return (
			<div>
				<h3><Badge color="warning">Products</Badge>
					<Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Product Name</th>
							<th>Unit Price</th>
							<th>Quantity Per Unit</th>
							<th>Units In Stock</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.map(p => (
							<tr key={p.id}>
								<th scope="row">{p.id}</th>
								<td><Link to={"/edit/"+p.id}>{p.productName}</Link></td>
								<td>{p.unitPrice}</td>
								<td>@{p.quantityPerUnit}</td>
								<td>{p.unitsInStock}</td>
								<td><Button onClick={()=>this.addToCart(p)} color="info">add</Button></td>
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
		currentCategory: state.changeCategoryReducer,
		products: state.productListReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			getProducts: bindActionCreators(productActions.getProducts, dispatch),
			addToCart: bindActionCreators(cartActions.addToCart,dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
