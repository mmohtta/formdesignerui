import React from 'react';
import { Router, Route, Link} from 'react-router-dom';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { history } from '../_helpers';
import { Design } from '../Design';
import { Form } from '../Form';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width:"100%",
    height:"100vh"
  },
  area: {
    height:"100vh",
  },
  navlink:{
    height:"100vh",
    backgroundColor:"#ffcd9194"
  }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
           console.log("location",location);
           console.log("action",action)
        });
    }

    render() {
        const {props:{classes}} = this;
        return (
            <div className={classes.root}>
                <Router history={history}>
                    <Grid container>
                        <Grid item xs={1} className={classes.navlink}>
                            <Button><Link to={"/"}>Design</Link></Button>
                            <Button><Link to={"/form"}>form</Link></Button>
                        </Grid>
                        <Grid item xs={11} className={classes.area}>
                            <Route exact path="/" component={Design} />
                            <Route path="/form" component={Form} />
                        </Grid>
                    </Grid>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
App= withStyles(styles)(App);
export {  App }; 