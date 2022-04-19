import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    mediumAndLargeScreensSearchBar :{
        [theme.breakpoints.down('sm')]:{
            display : 'none',
        },
        flex : 1,
        paddingLeft : '10%',
        paddingRight : '10%',
        display:'flex',
    },
    searchInput : {
        width:'100%',
        borderLeft : 'none',
        borderRight : 'none',
        border : "2px solid #FFD369",
        outline : 'none',
        paddingLeft : '2%',
        color : '#222831'
    },
    categorySelect : {
        borderRadius : 0,
        borderRight : 'none',
        border : "2px solid #FFD369",
        backgroundColor : '#FFD369',
        borderTopLeftRadius : 5,
        borderBottomLeftRadius : 5, 
        color : '#222831'
    },
    searchIconButton : {
        backgroundColor : '',
        border : "2px solid #FFD369",
        borderTopRightRadius : 5,
        borderBottomRightRadius : 5,
        borderLeft : 'none',
        backgroundColor : '#FFD369',
        color : '#222831',
    }
}))