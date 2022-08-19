import React from "react";
import "./Aboutcss.css";

const About = () => {
  return (
    <div className="aboutRoot">
      <div className="polarid">
        <img src={require("./picturee.jpg")} className="imageconatiner" alt="loading.."/>
      </div>
      <h1>About us</h1>
      <div id="para">
        <p>
          Newz.com founded in 2022 is India’s leading Hindi News website with
          the aim of reaching millions of Indians in India and significantly
          worldwide Indian Diaspora who are eager to stay in touch with India
          based news and stories in Hindi because of the varied contents
          presented in an eye pleasing design format.Founders of this website is{" "}
          <b>Diljot Singh, Gagandeep Singh , Gursangam Singh, Baldeep Singh</b>. It has taken a
          prominent position in the web market and quickly progressing to
          capture the top slot. We also remain clung to the tree of journalistic
          ethics by serving the fresh news on the platter of absolute
          authenticity and our comments stand only as a guard so that all the
          users of our portal do not carried away from the truth. Our news
          persons are prompt in responding to any event by collecting first hand
          data. Personal interviews of concerned people of that event or
          incident reinforce the fabric of the information not to say our
          questionnaires are very yielding. We are updating the news promptly
          and swiftly keeping the net users updated with the latest news
          covering a wide area in politics, sports, entertainment, health,
          books, business and others. We are also covering India’s 11 states.We
          provide a platform to the viewers as the most respected and trusted
          source for news and information. Our news portal has been designed in
          the most convenient manner so as to locate the desired news
          instantly.News websites are sites devoted to delivering the news in a
          different format than television, print or radio. News sites include
          sites that have a large variety of information which may not be
          considered "news" by all audiences, but may include entertainment,
          games, news that may not be current but is interesting...
        </p>
      </div>
      <h2>Follow us on</h2>
      <div id="credentials">
        <a
          href="https://www.linkedin.com/in/gagandeep-singh-060187209/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="quires"
            src={require("./linkdin.png")}
            width="30"
            height="30"
            style={{ alignContent: "center", justifyContent: "center" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gagandeep-singh-060187209/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="quires"
            src={require("./insta.png")}
            width="30"
            height="30"
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          />
        </a>
      </div>
    </div>
  );
};


export default About;