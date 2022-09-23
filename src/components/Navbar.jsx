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
          opacity: 0.68,
          display: "flex",
          flexDirection: "row",        }}
      >
        <Toolbar>
          <Box
            sx={{
              verticalAlign: "top",
              display: "inline-block",
              width: "20%",
              textAlign: "center",
              mb: 0.8,
              ml: "3%",
              mt: 0.5,
            }}
          >
            <Box
              component="img"
              sx={{
                width: "61px",
                height: "74px",
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
                fontSize: "1em",
                letterSpacing: "0.125rem",
                color: "black",
                textDecoration: "none",
                width:"100%"
              }}
            >
              Sarasavaty's <br/> Yoga Dance
            </Typography>
          </Box>
          <Box style="display:flex; flex-direction:row; width:60%">
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
          <Box
            component="img"
            sx={{
              width: "6%",
              height: "8%",
              ml: "20px",
            }}
            alt="Your logo."
            src={silhouette}
          />
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;