import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { designConstants,designerschema } from '../../_constants';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

let getField=(type,props)=>{
    let {min,mix,label,required,options} = props;
    switch(type){
        case "string":
            return <div>
                    <div>{`${label} ${required?'*':""}`}</div>
                    <div><input type="text"/></div>
                </div>
         case "number":
            return <div>
                    <div>{`${label} ${required?'*':""}`}</div>
                    <div><input type="number"/></div>
                </div>
         default:
            return ""
    }
}

import PropTypes from 'prop-types';

const styles = theme => ({
    form:{
        margin: "10px",
        padding: "20px",
        minHeight: "100px",
        maxHeight: "500px",
        backgroundColor: "azure"
    }
});

class DesignForm extends React.Component {
    render() {
        let { props :{design, dispatch, classes}} = this;
        return (
            <Grid container>
                <Grid item xs={8}>
                    <div className={classes.form}>
                        <h4>{design.label}</h4>
                        {design.child.map(({type,props})=>{
                            return getField(type,props)
                        })}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>{`Form Name`}</div>
                    <div><input type="text" onChange={(e)=>{dispatch({type:designConstants.CHANGE_LABEL,label:e.target.value})}} value={design.label}/></div>
                    <div>{`End point`}</div>
                    <div><input type="text" onChange={(e)=>{dispatch({type:designConstants.CHANGE_ENDPOINT,endpoint:e.target.value})}} value={design.endpoint}/></div>
                    <Button onClick={()=>{dispatch({type:designConstants.ADD_FIELD,field:designerschema.number})}}>add num</Button>
                    <Button onClick={()=>{dispatch({type:designConstants.ADD_FIELD,field:designerschema.string})}}>add text</Button>
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    let {design} = state;
    return {design} 
}

DesignForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
DesignForm= withStyles(styles)(DesignForm);
DesignForm = connect(mapStateToProps)(DesignForm);
export {  DesignForm };