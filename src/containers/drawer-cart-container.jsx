import { Fragment } from "react";
import { Link } from "react-router-dom";
/////REDUX
import { connect } from "react-redux";
import { toggleDrawerHidden } from "../redux/ui/ui.actions";

////Route
import { withRouter } from "react-router-dom";

/////Selector
import { createStructuredSelector } from "reselect";

import {
  selectDrawerHidden,
  selectToolbarRoute,
} from "../redux/ui/ui.selectors";

////Icons

/////Styles
import { makeStyles } from "@material-ui/core/styles";

///// Component
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 140;
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerItem: {
    textAlign: "right",

  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

const DrawerCart = ({
  hidden,
  toggleDrawerHidden,
  value,
  setValue,
  routes,
}) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={hidden}
        onClose={toggleDrawerHidden}
        onOpen={toggleDrawerHidden}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <List className={classes.list}>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                toggleDrawerHidden();
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectDrawerHidden,
  routes: selectToolbarRoute,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDrawerHidden: () => dispatch(toggleDrawerHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerCart)
);
