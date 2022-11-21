import Navbar from "./components/Navbar";
import Typography from "@suid/material/Typography";
import Footer from "./components/Footer";
import SlideShowSara from "./components/SlideshowSara";
import yogadanseyoung from "./assets/yogadanseyoung.jpeg"

function About() {
  return (
    <>
    <Navbar />
      <div class="about-bg">
        <br />
        <div class="row">
        <Typography
            style="padding:5px;letter-spacing:2px;font-weight:600; text-align:left;font-family:'Mythical Prince';opacity:0.85;width:60%;background-color:#FDFBF5"
            class="linear-gradient"
          >
            <div class="center-text">
            <p class="titre" style="opacity:1;text-decoration:underline;">
              Contenu des cours pour adultes :​
              <br />
              <br />
            </p>

            <p class="sous-titre" style="opacity:1;line-height:2.5">
              • Relaxation basée sur des exercices d’assouplissement, de
              respiration, de méditation avec la salutation accompagnée de
              mantras <br />• Echauffement, placements<br /> • Apprentissage de pas de
              base (adavus), de postures (karanas), de gestes de la main (hasta-
              mudras)<br /> • Introduction au travail des yeux et expression du visage
              (abhinaya)<br /> • Enseignement de la partie théorique de la danse
              (termes sanskrits)
            </p>
            <br />
            <p style="margin-top:10px;font-size:3.2vmin;opacity:1;text-decoration:underline ">
              Jours et horaires :
            </p>
            <p class="sous-titre" style="opacity:1;line-height:2;margin-top:10px;">
              Le lundi : - de 17h à 18hh15 (niveau intermédiaire) <br/> Le mardi : -
              de 17h à 18h15 (niveau débutant)
            </p>
            </div>
          </Typography>
          <SlideShowSara />
        </div>

        <br />
        <div class="second-row">
        <div
            style="padding:5px;letter-spacing:2px;font-weight:600;font-family:'Mythical Prince';opacity:0.85;width:65%;"
            class="center-text"
          >
            <p class="titre" style="opacity:1;text-decoration:underline;">
              Contenu des cours pour enfants et adolescents :​
              <br />
              <br />
            </p>
            <p class="sous-titre" style="opacity:1;line-height:2">
              • La salutation accompagnée du chant (Dhyana Slokam)
              <br />
              • Exercices d&#39;échauffement, de respiration et
              d&#39;assouplissement
              <br />
              • Apprentissage des adavus (tattadavus, nattadavus), cad les pas
              et mouvements de base, des postures (karanas), de la gestuelle
              (hasta-mudras)
              <br />
              • Apprentissage du rythme (talam)
              <br />
              • Travail des yeux et expression du visage (abhinaya)
              <br />
              • Chorégraphies (margam ou répertoire de danse classique)
              <br />
              • Enseignement de la partie théorique de la danse (termes
              sanskrits).
              <br />
            </p>
            <br />
            <p style="margin-top:10px;font-size:3.2vmin;;opacity:1;text-decoration:underline;">
              Jour et horaires :
            </p>
            <p class="sous-titre" style="opacity:1;line-height:2;margin-top:10px;">
              - de 10h à 11h15 (niveau débutant enfants) <br/>- de 14h à 15h15
              (niveau débutant/intermédiaire adolescents)
            </p>
          </div>
         
          <div class="container-home">
        <div class="wrapper-home">
          <img src={yogadanseyoung} alt="img" />
        </div>
        </div>
        </div>
        <div class="third-row">
<Typography
            style="letter-spacing:2px;font-weight:600; text-align:center;font-family:'Mythical Prince';background-color:#FDFBF5;"
            class="linear-gradient"
          >
            <p style="font-size:3.2vmin;opacity:1;text-decoration:underline;">
            Adresse :
              <br />
              <br />
            </p>

            <p style="font-size:2.9vmin;opacity:1;line-height:2.5">
            9 chemin des bois de lait, Colimaçons, St Leu
            </p>
            <br />
            <p style="margin-top:10px;font-size:2.9vmin;opacity:1;text-decoration:underline ">
            Durée d&#39;un cours : 1h15
            </p>
            <p style="font-size:2.9vmin;opacity:1;line-height:2;margin-top:10px;">
            Participation :
- 50€/4 cours par mois
- 15€/séance
            </p>
            <p style="font-size:2.9vmin;opacity:1;line-height:2;margin-top:10px;">
            Inscriptions et renseignements
par retour d&#39;email à {' '}
<a href="/Contact">sn.ba@hotmail.fr</a>
ou au 0692284460 <br/>
Vive la joie, vive la création !
            </p>
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
