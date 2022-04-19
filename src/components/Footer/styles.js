import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    footer : {
        bottom : 0,
        backgroundColor : '#EEEEEE',
        padding : '2%',
        paddingBottom : 0
    },
    footerHeader : {
    },
    logo : {
        width : '75px',
    },
    footerBody : {
        marginTop : '2%',
        textAlign: 'center',
        color : '#222831'
    },
    footerBodyLinks : {
        color : '#222831',
        textDecoration : 'none',
        '&:hover' : {
            color : '#FF5403',
            textDecoration : 'underline'
        }
    },
    signInForm : {
        display : 'flex',
        flexDirection : 'column',
        paddingLeft : '2%',
        paddingRight : '2%',
        justifyContent : 'space-between'
    },
    signInFormControl:{
        display:'flex',
        flexDirection:'column'
    },
    signInInputLabel:{
        textAlign : 'left',
        fontSize : '0.8em',
        paddingLeft : '2%',
        fontWeight : 'bold'
    },
    signInInputs : {
        height : '30px',
        border : '2px solid #222831',
        marginBottom : '2%',
        borderRadius : 5,
        paddingLeft : '2%',
        outline:'none',
        opacity:0.6,
        '&:hover, &:focus':{
            borderColor : '#FFD369'
        },
    },
    footerFooter : {
        textAlign : 'center',
        color : "#222831"
    }
}))