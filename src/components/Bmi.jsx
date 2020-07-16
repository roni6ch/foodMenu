import React from "react";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./SideMenu";
import Base from "./Base";

export default function Bmi() {
  return (
    <Grid container spacing={3}>
    <SideMenu />
    <Base />
  </Grid>
  );
}
