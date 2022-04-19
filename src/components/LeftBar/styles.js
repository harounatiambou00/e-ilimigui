import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    leftBar : {
        minWidth : '40%',
    },
    drawerContent : {
        [theme.breakpoints.up("md")] : {
            width : 350,
        },
        [theme.breakpoints.down("md")] : {
            width : 250,
        },
    },
    leftBarHeader : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#FFD369',
    }

}));