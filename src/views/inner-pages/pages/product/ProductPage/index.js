import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../../actions';
import HeaderLandingAppointment from '../../../../../components/header/landing/HeaderLandingAppointment';
import getParams from '../../../../../utils/getParams';

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({params});
        const payload = {
            params
        }
        dispatch(getAllProducts(payload));
    }, []);


    return (
        <>
        <HeaderLandingAppointment />
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {
                    page.products && page.products.map((product, index) => 
                        <Card 
                            key={index}
                            style={{
                                width: '400px',
                                height: '200px',
                                margin: '5px',
                                display: 'flex'
                            }}
                        >
                            <img style={{
                                width: '100%',
                                height: '100%'
                            }} src={product.img} alt="alt" />
                        </Card>
                    )
                }
            </div>
        </div>
    </>)

}

export default ProductPage;