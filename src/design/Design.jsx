import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import { userActions } from '../_actions';
import { DesignForm } from '../_components/design/DesignForm';

class Design extends React.Component {
    render() {
        return (
            <div >
                <DesignForm/>
            </div>
        );
    }
}

function mapStateToProps(state) {

}

Design = connect(mapStateToProps)(Design);
export {  Design };