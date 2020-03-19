import React from 'react';
import { getData } from '../actions';
import { connect } from 'react-redux';
import './component.css';

const CatForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
        // informs redux to send GET_DATA to reducer
    }

    return (
        <>
            {props.isFetchingData ? (
                <div className='load'>*** We are calling the kitties ***</div>
            ) : (
                    <button onClick={handleGetData}>Get Kitties</button>
                    // activate this button to 
            )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, {getData}) (CatForm);

