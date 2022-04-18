import React from 'react';
import View from '../components/View';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function PublicAppContainer(props: any) {
    return (
        <>
            <Nav />
            <View nogap padding="45px 0" maxwidth="unset">
                {props.children}
            </View>
            <Footer />
        </>
    );
}

export default PublicAppContainer;
