import React from 'react';
import { connect } from 'react-redux';
import './component.css'

const CatList = props => {

    console.log(props, ' is props in CatList') // object with 1 array item called cats which has a url for photo...? 

    return (
        <> 
            {props.cats.map(cat => (
                <div>
                    <h2> Found one! </h2>
                    <img className='catphoto' src={cat.url}></img>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        cats: state.cats
    }
}

export default connect(mapStateToProps, {})(CatList)