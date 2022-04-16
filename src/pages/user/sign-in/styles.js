import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    sing_in_page:{
        [theme.breakpoints.up('md')]:{
            
        },
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color : "#064663",
        width: '100%',
        overflowY: 'scroll'
    },
    sign_up_page_container:{
        border: "2px solid #ddd",
        borderRadius: '5px',
        width: '40%',
        [theme.breakpoints.down("sm")]:{
            width: '100%',
            height : '100%',
            border : 'none',
            overflowY: 'scroll'
        }
    },
    sign_up_page_container_header:{
        textAlign: 'center',
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sign_up_page_container_body:{
        padding: theme.spacing(2)
    },
    user_type_choice_title : {
        textAlign: 'center',
        marginTop: theme.spacing(2)
    },
    link_to_sign_up_wrapper:{
        width:'100%',
        fontSize : '0.8em',
        marginTop : '2%',
        textAlign : 'center'
    },
    link_to_sign_up :{
        '&:link' : {
            color : theme.palette.primary.main,
        },
        '&:visited' : {
            color : theme.palette.primary.main,
        },
        textDecoration : 'none',
    }
    ,
    sign_up_page_container_footer:{

    }
}))