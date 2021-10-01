import React, { useState, useRef } from 'react'
import styles from './Contact.module.css';
import AccentBlok from '../../components/accentBlok/AccentBlok';
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";
import emailjs from 'emailjs-com'


function Contact() {
  const nameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [succesMessage, setSuccesMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setSuccesMessage(false);

    emailjs
      .sendForm(
        "service_cwhabxh",
        "template_h70skio",
        e.target,
        "user_SIUc361GpWWJQ3v3gY7Ph"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccesMessage(true);
  }
  return (
    <div className={styles.container}>
      <SecondHeader title={"Contact"} />
      <div className={styles.content}>
      <h2>Contact</h2>
      <form onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Uw naam"
          className={styles.input}
          ref={nameRef}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Onderwerp"
          className={styles.input}
          ref={subjectRef}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email-adres"
          className={styles.input}
          ref={emailRef}
          required
        />

        <textarea
          name="message"
          placeholder="Uw bericht"
          className={styles.inputTextarea}
          rows="4"
          ref={messageRef}
          required
        />

        <input
          type="submit"
          value="Verzenden"
          className={styles.submitSend}
        />
        {succesMessage && <p>Uw bericht is succesvol verzonden!</p>}
      </form>
      </div>
      <div className={styles.blok}>
    {/* <BlokEenDerde
      bgColor={"blocks2Giannis"}
      title={"Testimonial"}
      from={"Van coachee Erwin"}
      content={
        "“Ik heb Jet leren kennen als een zeer gedreven en sympathiek persoon. Jet weet hoe ze mensen moet prikkelen en doet dit op een leuke doch leerzame manier. Mede dankzij Jet wist ik mezelf te ontplooien en ben ik erachter gekomen waar mijn kwaliteiten en valkuilen liggen. Jet coacht en traint op professionele, enthousiaste wijze en is altijd correct en discreet.”"
      }
    /> */}
        <BlokEenDerde
          bgColor={"blocks2Giannis"}
          color={["#FFFFFF"]}
          title={"Testimonial"}
          from={
            "Van coachee Mieke (hbo-docent en zelfstandig adviseur curriculum en toetsing):"
          }
          content={
            "“Jet confronteert en pikt essentiële aspecten uit een lang verhaal, vaak een bijzin, waardoor Jet me bewust maakt van valkuilen/opvattingen. Jet geeft me het gevoel actief te luisteren, waardoor ik word aangemoedigd door te praten en te denken. Jet schat goed in in hoeverre ik mezelf al stuur en pakt aan waar ik handelingsverlegen ben.”"
          }
        />
        <AccentBlok
         title={"Waardes"}
         content={"Mijn waardes zijn: Liefde  (empathie en respect) | Speelsheid (creativiteit, authenticiteit & humor) | Schoonheid (kwaliteit, ethiek & esthetiek) | Wijsheid (inzicht, intuïtie, integriteit en kennis)."}
         bgColor={"blocksVisie"}
         buttonText={"Lees verder."}
         buttonLink={"/werkwijze"}/>

        <BlokEenDerde
          bgColor={"blocks2Yellow"}
          from={"Van coachee David"}
          title={"Testimonial"}
          content={
            "Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat voor anderen. De manier waarop zij iemand een spiegel kan voorhouden, leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en het vertrouwen in zichzelf kan terugvinden. Ik beveel Jet dan ook van harte aan als trainer!”"
          }
        />
      </div>
    
    </div>
  );
}

export default Contact;
