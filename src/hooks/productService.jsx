import { useState, useEffect } from 'react';
import ebzbe from '../api/ebzbe';

export default () => {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const productEndPoint = '/products';

    const getProducts = async () => {
        try {
            const response = await ebzbe.get(productEndPoint);
            setProducts(response.data);
            console.log(products);
        } catch (err) {
            console.log(err);
            setErrorMessage('OOps! Somethiing was wrong, we could not get data.');
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return [products, errorMessage];
};