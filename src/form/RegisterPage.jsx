import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Form extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                reg
            </div>
        );
    }
}

function mapStateToProps(state) {

}

Form = connect(mapStateToProps)(Form);
export { Form };
