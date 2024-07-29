import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Filter({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="scrollable"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
          },
        }}
      >
        {filters.map((el, index) => (
          <Tab
            key={index}
            className={styles.tabElement}
            label={el.key}
            {...allyProps(index)}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default Filter;