import React, { Component, useState, useEffect } from 'react';
//import productService from '../hooks/productService';
import ebzbe from '../api/ebzbe';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            errorMessage: ''
        }
    };

    componentDidMount() {
        //     const [products, setProducts] = useState([]);
        // const [errorMessage, setErrorMessage] = useState('');
        const productEndPoint = '/products';
        console.log(ebzbe);
        const getProducts = async () => {
            try {
                // const response = await ebzbe.get(productEndPoint);
                // console.log(response);
                // this.setState({ products: response.data });
                // console.log(this.state.products);

                fetch('https://ebz-server.herokuapp.com/')
                    //fetch('https://facebook.github.io/react-native/movies.json')
                    .then((response) => {
                        console.log(response);
                        //response.json();
                    })
                    .then((responseJson) => {
                        console.log(responseJson);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } catch (err) {
                console.log(err);
                this.setState({ errorMessage: 'OOps! Somethiing was wrong, we could not get data.' });
            }
        };

        getProducts();
    };

    render() {
        return (
            <div> Products in console</div>

        );
    };
}

export default Product;