import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "80",
    padding: "16px 00",
    backgroundColor: "#120e1f",
    display: "flex",
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1152px",
    padding: "0 16px",
    boxSizing: "border-box",
    margin: "0 auto",

    display: "flex",
    alignItems: "center",
  },
  copyright: {
    color: "#afafaf",
  },
  socialIcon: {
    display: "flex",
    color: "#afafaf",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const Copyright = () => {
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className={classes.copyright}
      >
        {`© ${new Date().getFullYear()} گروه راشا . کلیه حقوق محفوظ  است .`}
      </Typography>
    );
  };

  return (
    <Fragment>
      <Box className={classes.footer}>
        <Container className={classes.container}>
          <Copyright />
          <Box flexGrow={1} />
          <Box className={classes.socialIcon}>
            <IconButton>
              <InstagramIcon color="primary" />
            </IconButton>
            <IconButton>
              <LinkedInIcon color="primary" />
            </IconButton>
            <IconButton>
              <WhatsAppIcon color="primary" />
            </IconButton>
            <IconButton>
              <TwitterIcon color="primary" />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Footer;
