import styles from "./App.module.css";
import Typography from "@suid/material/Typography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import yogadansehome from "./assets/yogadansehome.jpeg"
function Home() {
  return (
    <>
      <Navbar />
      <div class={styles.body}>
        <div
          class="home-text"
        >
          Venez découvrir le YOGA de la DANSE et le Bharatanatyam avec Sarasvatî
        </div>
      </div>
      <div
        class="bg-image"
      >
        <div
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
        </div>
        <div>
        <div class="container-home">
        <div class="wrapper-home">
          <img src={yogadansehome} alt="img" />
        </div>
        </div>
        </div>
      </div>
      <div class={styles.parralax}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Mythical Prince",
            padding:5,
            fontWeight: 550,
            letterSpacing: "0.125rem",
            color: "#F5E0D2",
            fontSize: "6vmin",
          }}
        >
          “Là où va la main va l’œil ; là où va l’œil va l’esprit ; là où va
          l’esprit le sentiment s'éveille et lorsque le sentiment s’éveille,
          naît le rasa, le siège de l’âme. “ Abhinaya-Darpana
        </Typography>
        <div style="width:80%;display:flex;height:70%;justify-content:center;margin-bottom:20px">
        <iframe
          style="border-radius:10px;"
          width="80%"
          height="450"
          src="https://www.youtube.com/embed/C8nJ-58be2I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
        <Typography variant="subtitle1" style="color:#F7D1C4;margin-top:30px;margin-bottom:30px">
          Vidéo démonstrative du Dhyana Slokam par Sarasavati Badamia
        </Typography>
      </div>
      <div
     class="maps-respons">
        <div>
          <p style="text-align:center">Où nous trouver :</p>
          <iframe
          class="maps-width"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.25231050131!2d55.28640295067534!3d-21.142354982538794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218297341bf23697%3A0x9a8445ee317540d!2s9%20Chem.%20des%20Bois%20de%20Lait%2C%20Saint-Leu%2097436%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1661236342692!5m2!1sfr!2sfr"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p style="width:50%;margin-top:40px;padding-top:1px;font-size:5vmin;opacity:1;line-height:1.5;text-align:left;font-style:italic;font-weight:650;">
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
