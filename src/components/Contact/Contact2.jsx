import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import IsEmail from "isemail";

import ContactInput from "./common/ContactInput";
import Spy from "../ScrollSpy/Spy";

function Contact2() {
  const [trueEmail, setTrueEmail] = useState(true);
  const [trueName, setName] = useState(true);
  const textRef = React.createRef();

  function validate(email, type) {
    if (type == "text") {
      let tru;
      if (!email.length) {
        // I am empty
        tru = false;
        console.log("empty");
      } else {
        tru = true;
        console.log(" not empty");
        // I am not empty
      }
      setName(tru);
    } else {
      const tru = IsEmail.validate(email) ? true : false;
      setTrueEmail(tru);
    }
  }

  const controls = useAnimation();
  return (
    <motion.div
      animate={controls}
      className="h-100vh contact pos-rel"
      id="Contact"
    >
      <Spy navTabId={5} />
      <div className="contact-in">
        <div className="contact-head">Contact me</div>
        <div className="contact-form">
          <form action="">
            <div className="row">
              <div className="contact-title">name</div>

              <ContactInput
                type={"text"}
                validate={validate}
                placeholder={"Van gogh"}
                error={!trueName}
              />
            </div>
            <div className="row">
              <div className="contact-title">email</div>
              <ContactInput
                type={"email"}
                validate={validate}
                placeholder={"CreativeMf@gmail.com"}
                error={!trueEmail}
              />
            </div>
            <div className="row">
              <div className="contact-title">Message</div>
              <textarea
                ref={textRef}
                onFocus={() => (textRef.current.rows = "8")}
                onBlur={() => (textRef.current.rows = "2")}
                className="text-input text-area input"
                type="text"
                cols="10"
                rows="2"
                placeholder="Hi bro let's do some collab 
I open on Wednesday and Tuesday"
              />
            </div>
            <div className="send-row">
              <input
                disabled={!trueEmail || !trueName}
                className="send"
                type="submit"
                value="send"
              />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact2;
