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
                <div className='load'>*** calling the kitties ***</div>
            ) : (
                    <button onClick={handleGetData}>Get Kitties</button>
                    // this button -> handleGetData -> getData (in actions file) -> axios.
            )}
        </>
    )
};

// getting state using connect (state is in store)
const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}
// getData is from action file and is placed in the position of mapDispatchToProps
export default connect(mapStateToProps, {getData}) (CatForm);

