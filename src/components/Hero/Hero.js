import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { heroData } from "../../data/heroData";
import "./Hero.css";
import caption from "../../assets/hero/caption.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 769 ? true : false;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_btfi7br",
        "template_m8swxsz",
        form.current,
        "dkj9nidCDT-drPdKj"
      )
      .then(
        (result) => {
          toast.success('Subscribed succesfully! Let us color your dream house!', { position: toast.POSITION.TOP_CENTER });
        },
        (error) => {
          toast.error('Subscription Failure!', { position: toast.POSITION.TOP_RIGHT });
        }
      );
  };
  return (
    <section className="hero-block" id="hero">
      <ToastContainer />
      <Carousel data-bs-theme="dark" pause={false} interval={5000}>
        <Carousel.Item key={heroData[0].id}>
          <img
            className="d-block w-100 hero-img"
            src={heroData[0].image}
            alt="First slide"
          />
          <div className="custom-captions">
            <div className="custom-caption-1-1">
              <h3 className="hero-title">Niko Paints</h3>
              <img className="hero-caption" src={caption} alt="caption" />
            </div>
            <div className="custom-caption-1-2">
              <motion.div
                initial={{ left: mobile ? "100px" : "238px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition, type: "tween" }}
              ></motion.div>
              <span className="hero-caption-1">{heroData[0].caption}</span>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item key={heroData[1].id}>
          <img
            className="d-block w-100 hero-img"
            src={heroData[1].image}
            alt="Second slide"
          />
          <div className="custom-captions">
            <div className="custom-caption-2-1">
              <h3 className="hero-title">Niko Paints</h3>
              <img className="hero-caption" src={caption} alt="caption" />
            </div>
            <div className="custom-caption-2-2">
              <div className="hero-caption-2">
                <span>Add more</span>
                <span>color to your</span>
                <div className="love">
                  <span>love </span>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                </div>
              </div>
            </div>
            <div className="custom-caption-2-3">
              <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter Your Email Address"
                />
                <button className="btn-email">Subscribe</button>
              </form>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item key={heroData[2].id}>
          <img
            className="d-block w-100 hero-img"
            src={heroData[2].image}
            alt="Third slide"
          />
          <div className="custom-captions">
            <div className="custom-caption-3-1">
              <h3 className="hero-title">Niko Paints</h3>
            </div>
            <div className="custom-caption-3-2">
              <div className="hero-caption-3">
                <span>Find Beauty</span>
                <span>In Simplest</span>
                <span>Shades</span>
              </div>
            </div>
            <div className="custom-caption-3-3">
                <div>
                  <span>
                    <NumberCounter end={500} start={400} delay="4" preFix="+" />
                  </span>
                  <span>Trusted Hearts</span>
                </div>
                <div>
                  <span>
                    <NumberCounter end={6} start={2} delay="4" preFix="+" />
                  </span>
                  <span>Quality Products</span>
                </div>
                <div>
                  <span>
                    <NumberCounter end={20} start={1} delay="4" preFix="+" />
                  </span>
                  <span>Years Of Perfection</span>
                </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
