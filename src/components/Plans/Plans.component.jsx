import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../../features/userSlice';

import db from '../../firebase.utils/firebase';

import './Plans.styles.css'

const Plans = () => {

    const [products, setProducts] = useState([]);

    const user = useSelector(selectUser);
    const [currentsubscription, setCurrentSubscription] = useState(null);

    const history = useHistory();

    useEffect(() => {
        db.collection('Products').where('active','==',true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
            });
            setProducts(products);
        });
        db.collection('Users').doc(user.uid).get().then(doc => {
            if (doc.data().Subscription !== null)
                setCurrentSubscription(doc.data().Subscription.name);
        })
    },[user.uid]);

    const Checkout = (productData) => {
        db.collection('Users').doc(user.uid).update({
            Subscription: productData,
        }).then(
            alert(`Subscribed to ${productData.name} plan`),
            history.push('/')
        ).catch(error => alert(error.message))
    };

    return (
        <div className='plansScreen'>
            {
                Object.entries(products).map(([productId, productData]) => {
                    return (
                        <div className='plansScreen_plan'>
                            <div className="plansScreen_info">
                                <h4>{productData.name}</h4>
                                <h6>{productData.description}</h6>
                            </div>
                            <button className={currentsubscription !== productData.name ? 'subscribe' : 'current'} onClick={() => Checkout(productData)}>
                                {currentsubscription !== productData.name ? `Subscribe` : `Current Package`}
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Plans;