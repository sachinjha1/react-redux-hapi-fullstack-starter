import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = props => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography type="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
