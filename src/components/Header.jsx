import React, { useState, useContext } from "react";
import { createStyles, makeStyles} from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
} from "react-router-dom";
/* store */
import FlowContext from "../store/FlowContext";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState({ menu: false });
  const { flowState, flowDispatch } = useContext(FlowContext);

  const toggleDrawer = (event, menu) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ menu });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <MenuIcon onClick={(e) => toggleDrawer(e, true)} />
          </Button>
          <Typography variant="h6" className={classes.title}>
            Food Menu
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.menu} onClose={(e) => toggleDrawer(e, false)}>
        <List
          onClick={(e) => toggleDrawer(e, false)}
          onKeyDown={(e) => toggleDrawer(e, false)}
        >
            {flowState.menu.map((label, index) => (
              <React.Fragment key={label}>
                <ListItem button>
                  <NavLink exact activeClassName="active" to={label}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    {label}
                  </NavLink>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
        </List>
      </Drawer>
    </div>
  );
}
