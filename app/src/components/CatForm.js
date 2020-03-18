import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const CatForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
        // informs redux to send GET_DATA to reducer
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>*** We are calling the kitties ***</div>
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

