import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TableStatusFilterSelector() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab disableRipple label="All" />
        <Tab disableRipple label="Active" />
        <Tab disableRipple label="Pending" />
        <Tab disableRipple label="Blocked" />
      </Tabs>
    </Box>
  );
}
