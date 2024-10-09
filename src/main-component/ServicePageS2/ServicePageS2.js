import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ServicePageS2 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSectionS2/>
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePageS2;
