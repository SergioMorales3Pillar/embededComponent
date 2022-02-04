import React from "react";
import PropTypes from "prop-types";
import styles from "./AccordionTest.module.scss";
import ParentComponent from "../ParentComponent/ParentComponent";
import Child01Component from "../Child01Component/Child01Component";
import Child02Component from "../Child02Component/Child02Component";

const AccordionTest = () => {
  function Header(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function Body(props) {
    return (
      <div>
        <h1>This is a sample body1!!</h1>
        <p>This is a sample text</p>
        <img src="https://source.unsplash.com/random/400x200" />
      </div>
    );
  }
  return (
    <div className={styles.AccordionTest} data-testid="AccordionTest">
      <ParentComponent>
        <Header name="Cualquier Cosa" />
        <Body />
      </ParentComponent>
    </div>
  );
};
AccordionTest.propTypes = {};

AccordionTest.defaultProps = {};

export default AccordionTest;
