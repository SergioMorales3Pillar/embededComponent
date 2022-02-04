import React, { Children } from "react";
import PropTypes from "prop-types";
import styles from "./ParentComponent.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ParentComponent = (props) => (
  <div className={styles.ParentComponent} data-testid="ParentComponent">
    {console.log(props)}
    ParentComponent Accordion
    <p>
      This component renders an Accordion using Children as elements for Body
      and Header
    </p>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
        <Typography> {props.children[0]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.children[1]}</Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

ParentComponent.propTypes = {};

ParentComponent.defaultProps = {};

export default ParentComponent;
