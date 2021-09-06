import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 50px',

  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2.2em',
    fontWeight: 600,
    fontFamily: 'arial'
  },
  image: {
    marginLeft: '30px',
    borderRadius: 200,
    width: 50,
    height: 50,
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  }
}))
