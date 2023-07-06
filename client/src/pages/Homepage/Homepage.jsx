import React from 'react';

import { Navbar } from '../../components/Navbar'
import { Wishlist } from '../../components/Wishlist'
import { Login } from '../../components/Login'
import { SignUp } from '../../components/Signup'
import { Cart } from '../../components/Cart'
import { Footer } from '../../components/Footer'
import { OrderSummary } from '../../components/OrderSummary'
import { ProductCard } from '../../components/ProductCard'
import { ViewUser } from '../../components/ViewUser'

const Homepage = () => {

    return (
    <div>
        <Navbar />
        <Login />
        <SignUp />
        <ProductCard />
        <Cart />
        <OrderSummary />
        <ViewUser />
        <Wishlist />
        <Footer />
        homepage
    </div>
);
};

export default Homepage;