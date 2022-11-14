import styles from "./App.module.css";
import Typography from "@suid/material/Typography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import yogadansehome from './assets/yogadansehome.jpeg'

function Home() {
  return (
    <>
      <Navbar />
      <div class={styles.body}>
        <Typography
          variant="h2"
          sx={{
            textAlign:'center',
            padding:10,
            fontFamily: "Mythical Prince",
            fontWeight: 550,
            letterSpacing: "0.125rem",
            color: "#F5E0D2",
            fontSize: "calc(32px + 3vmin)",
          }}
        >
          Venez découvrir le YOGA de la DANSE et le Bharatanatyam avec Sarasvatî
        </Typography>
      </div>
      <div
        class="bg-image"
        style="display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height:80%;
  background:rgb(255,125,13);background: rgb(255,20,91);background: linear-gradient(180deg, rgba(251,162,143,1) 19%, rgba(36,89,136, 1) 100%);"
      >
        <Typography
          style="padding:50px;letter-spacing:2px;font-weight:650; text-align:left;font-family:'Mythical Prince';opacity:1;width:60%;margin-right:auto;margin-left:20px;"
          class="text-respons"
        >
          <p style="font-size:2.6vh;opacity:1;font-style:italic;color:#1D1F23">
            La pratique s’appuie sur la forme la plus ancienne de danse sacrée
            de l’Inde : Le Bharatanatyam.<br />
          </p>
          <p style="font-size:2.6vh;opacity:1;margin-top:20px;font-style:italic;color:#1D1F23">
            Cet art fait partie de la Bakti Yoga et incarne le “Yoga de la
            danse”. Il allie dévotion, concentration, joie et discipline. <br />
          </p>
          <p style="font-size:2.6vh;opacity:1;line-height:1.5;margin-top:20px;">
          Pour les enfants (dès 4 ans) et les adolescents, la pratique façonne le
        corps années après années et l&#39;amène à la révélation de l&#39;âme.
        Je propose pour eux des cours de Bharathanatyam, dans le style
        Kalakshetra, conformément à l&#39;enseignement que j&#39;ai reçu de mon
        maître Bharati Vayaboury.
        </p>
            <br />
        <p style="font-size:2.6vh;font-style:italic;color:#1D1F23">   Le style Kalakshetra, issu de l&#39;école
        fondée par Sri Rukmini Devi et renommée pour sa méthode rigoureuse,
        s&#39;appuie sur des &quot;adavus&quot; (pas et mouvements de base)
        d&#39;une précision géométrique et incarne une forme de grâce évoquée
        dans le Yajur Véda.</p> 
          
          <br />
          <p style="font-size:2.6vh;opacity:1;line-height:1.5;">
          Pour les adultes, l&#39;objectif est de combiner les
        bienfaits du Yoga (méditation, respiration et rigueur) et ceux de la
        danse (souplesse, grâce et beauté), en l’occurrence un yoga artistique
        qui a pour but de révéler le spirituel à travers le corporel.
          </p>
        </Typography>
        <div class="container-home">
        <div class="wrapper-home">
          <img src={yogadansehome} alt="img" />
        </div>
    </div>
      </div>
      <div class={styles.parralax}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Mythical Prince",
            fontWeight: 550,
            letterSpacing: "0.125rem",
            color: "#F5E0D2",
            fontSize: "35px",
          }}
        >
          “Là où va la main va l’œil ; là où va l’œil va l’esprit ; là où va
          l’esprit le sentiment s'éveille et lorsque le sentiment s’éveille,
          naît le rasa, le siège de l’âme. “ Abhinaya-Darpana
        </Typography>
        <iframe
          style="border-radius:10px;margin-top:70px;margin-bottom:-50px"
          width="40%"
          height="315"
          src="https://www.youtube.com/embed/JMIHfefd53E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Typography variant="subtitle1" style="color:#F7D1C4;margin-top:55px">
          Vidéo démonstrative du yoga de la danse par Sarasavati Badamia et
          Didier Makaga à la musique{" "}
        </Typography>
      </div>
      <div
        style="height:100vh;font-size:36px;display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;background-color:#245988;font-family:'Mythical Prince"
      >
        <div>
          <p style="text-align:center">Où nous trouver :</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.25231050131!2d55.28640295067534!3d-21.142354982538794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218297341bf23697%3A0x9a8445ee317540d!2s9%20Chem.%20des%20Bois%20de%20Lait%2C%20Saint-Leu%2097436%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1661236342692!5m2!1sfr!2sfr"
            width="650vw"
            height="550"
            style="border:0;margin-top:20px;margin-bottom:30px; margin-right:30px;box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;border-radius:20px;border: 10px solid #967F8A;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p style="width:40%;margin-top:80px;padding-top:1px;font-size:25px;opacity:1;line-height:2;text-align:left;font-style:italic;font-weight:650;">
          Jours et horaires : Le lundi de 17h à 18h15 <br />
          Adresse : 9 chemin des bois de lait, Colimaçons, St Leu <br />
          Durée d'un cours : 1h15
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
