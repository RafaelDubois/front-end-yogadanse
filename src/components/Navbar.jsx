import styles from "../App.module.css";
import MenuIcon from "@suid/icons-material/Menu";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import Menu from "@suid/icons-material/Menu";
import AccountCircle from "@suid/icons-material/AccountCircle";
import { createSignal } from "solid-js";
import Container from "@suid/material/Container";
import pngShiva from "../assets/pngshiva.png";
import silhouette from "../assets/silhouette.png";
import Link from "@suid/material/Link";
import "../style.css"

function Navbar () {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
    return (
        <AppBar
        position="fixed"
        style={{
          background: "#FBA28F",
          width: "100%",
          opacity: 0.68,
          display: "flex",
          flexDirection: "row",        }}
      >
        <Toolbar>
          <Box
            sx={{
              verticalAlign: "top",
              display: "inline-block",
              width: "26%",
              textAlign: "center",
              mb: 0.8,
              ml: "4vmin",
              mr:"3vmin",
              mt: 0.5,
            }}
          >
            <Box
              component="img"
              sx={{
                width: "25%",
                height: "30%",
              }}
              alt="Your logo."
              src={pngShiva}
            />
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              class="font-test"
              sx={{
                display: "block",
                fontFamily: "Samarkan",
                fontStyle: "black",
                fontWeight: 650,
                fontSize: "calc(5px + 1.1vw)",
                letterSpacing: "0.125rem",
                color: "black",
                textDecoration: "none",
                width:"100%"
              }}
            >
              Sarasavaty's <br/> Yoga Dance
            </Typography>
          </Box>
          <Box style="display:flex; flex-direction:row; width:90%">
            <Link href="/" name="top" onClick={goToTop()} class={styles.link}>
              Accueil
            </Link>
            <Link href="/about" name="top" onClick={goToTop()} class={styles.link}>
             Cours
            </Link>
            <Link href="/contact" name="top" onClick={goToTop()} class={styles.link}>
              Contact
            </Link>
          </Box>
          <div class="img-display">
          <Box
            component="img"
            sx={{
              width: "30%",
              marginLeft: "10%",
            }}
            alt="Your logo."
            src={silhouette}
          />
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;