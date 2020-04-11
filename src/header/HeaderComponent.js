import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from "../img/Avatar.jpg"
import { makeStyles } from '@material-ui/core';



const HeaderComponent = () => {
  
    return (
        <AppBar position="relative">
            <div className="header-content">
                <div>
                    <Typography variant="h1">Todo app</Typography>
                    <Typography variant="subtitle2" align="right">by Vpartyzan</Typography>
                </div>
                <div>
                    <Avatar alt="Vpartyzan" src={avatarImg} classes={{root: 'avatar'}} />
                </div>
            </div>
        </AppBar>
    );
};

export default HeaderComponent;