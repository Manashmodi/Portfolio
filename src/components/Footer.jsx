import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://i.ibb.co/sVcQPtd/modi.jpg"}
          alt="Founder"
        />

        <h2>Manash Modi</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@manashmodi7349" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.linkedin.com/in/manash-modi-00503a217" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Manashmodi" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;