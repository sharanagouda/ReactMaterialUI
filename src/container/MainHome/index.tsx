import React, { Component } from 'react';
// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { Route, Router, Link } from "react-router-dom";
import { history } from "../../config/Store";
import { Todo } from "../../model";
import { RootState } from "../../reducers/index";
import Home from "../../container/Home";
import SignUp from "../../container/SignUp";
import Login from "../../container/Login";
import MainHome from "../../container/MainHome";
import AxiosSubscriber from "../../RxJS_Test";
import SearchFlight from "../../container/SearchFlight"
import TodoHomePage from '../../container/Todo/TodoHomePage';
import { TodoTable } from '../../components';


function Routes(){
    const classes = useStyles()
    return (
        <div className={classes.content}>
              <Route path ="/" exact component={MainHome}/>
              <Route path="/main" exact component={Home}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={SignUp}/>
              <Route path="/searchflight" exact component={SearchFlight}/>
              <Route path="/axiosSubscriber" exact component={AxiosSubscriber} />
              <Route path="/todo" exact component={TodoHomePage} />
              <Route path="/todoTable" exact component={TodoTable} />
              <Route component={PageNotFound} />
        </div>
    );
}

const PageNotFound =()=>(
      <div style={{marginTop:'75px'}}>
          <section className="section content has-text-centered" style={{minHeight:'750px'}}>
            <h1 style={{textAlign:"center", color:"#8B0000"}}> #404 Page not found</h1>
            <p className='is-size-5' style={{borderTop:'1px solid #222', paddingTop:'20px', textAlign:"center"}}>Looks like you found a page that doesn't exist!</p>
            <p style={{textAlign:"center"}}>You can go back home by clicking <Link to='/'>here</Link>.</p>
          </section>
        </div>
      )

      function Drawer(props: { todoList: Todo[] }) {
        const classes = useStyles();
    
        return (
            <div>
                <div  />
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push("/")}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push("/todoTable")}>
                        <ListItemIcon>
                            <TodoIcon todoList={props.todoList} />
                        </ListItemIcon>
                        <ListItemText primary="Todo" />
                    </ListItem>
                </List>
            </div>
        );
    }
    
    function Main() {
        const classes = useStyles();
        const [mobileOpen, setMobileOpen] = React.useState(true);
        const todoList = useSelector((state: RootState) => state.todoList);
    
        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };
    
        return (
            <Router history={history}>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    className={classes.navIconHide}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                >
                                    Create-React-App with Material-UI, Typescript,
                                    Redux and Routing
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Hidden mdUp>
                            <DrawerMui
                                variant="temporary"
                                anchor={"left"}
                                open={mobileOpen}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                <Drawer todoList={todoList} />
                            </DrawerMui>
                        </Hidden>
                        <Hidden smDown>
                            <DrawerMui
                                variant="permanent"
                                open
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                <Drawer todoList={todoList} />
                            </DrawerMui>
                        </Hidden>
                        <Routes />
                    </div>
                </div>
            </Router>
        );
    }
    
    function TodoIcon(props: { todoList: Todo[] }) {
        let uncompletedTodos = props.todoList.filter(t => t.completed === false);
    
        if (uncompletedTodos.length > 0) {
            return (
                <Badge color="secondary" badgeContent={uncompletedTodos.length}>
                    <FormatListNumberedIcon />
                </Badge>
            );
        } else {
            return <FormatListNumberedIcon />;
        }
    }
    
    const drawerWidth = 240;
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            width: "100%",
            height: "100%",
            zIndex: 1,
            overflow: "hidden",
        },
        appFrame: {
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
        },
        appBar: {
    
            position: "absolute",
        },
        navIconHide: {
            
        },
        drawerPaper: {
            paddingtop:64,
            width: 250,
            backgroundColor: "#ffe6e6",
            
        },
        content: {
            backgroundColor: "#e5f2ff",
            width: "100%",
            height: "calc(100% - 56px)",
            marginTop: 56,
            
        },
    }));
export default Main;