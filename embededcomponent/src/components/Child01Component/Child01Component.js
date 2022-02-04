import React from 'react';
import PropTypes from 'prop-types';
import styles from './Child01Component.module.scss';

const Child01Component = () => (
  <div className={styles.Child01Component} data-testid="Child01Component">
    Child01Component Component
  </div>
);

Child01Component.propTypes = {};

Child01Component.defaultProps = {};

export default Child01Component;
