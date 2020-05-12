import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./cards.styles.scss";

interface IStats {
  value: number;
}

interface ICards {
  totalData: {
    confirmed: IStats;
    recovered: IStats;
    deaths: IStats;
    lastUpdate: Date;
  };
}

const Cards: React.FC<ICards> = ({ totalData }) => {
  const { confirmed, recovered, deaths, lastUpdate } = totalData;

  return (
    <div className="card-container">
      <Grid justify="center" spacing={3} container>
        <Grid item justify="center" container xs={12} md={3}>
          <Card className="card-container__confirmed">
            <CardContent>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Total confirmed:
              </Typography>
              <Typography variant="h5" component="h2">
                {confirmed && confirmed.value}
              </Typography>
              <Typography variant="h6" component="h2">
                Last update: {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item justify="center" container xs={12} md={3}>
          <Card className="card-container__recovered">
            <CardContent>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Total recovered:
              </Typography>
              <Typography variant="h5" component="h2">
                {recovered && recovered.value}
              </Typography>
              <Typography variant="h6" component="h2">
                Last update: {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item justify="center" container xs={12} md={3}>
          <Card className="card-container__deaths">
            <CardContent>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Total deaths:
              </Typography>
              <Typography variant="h5" component="h2">
                {deaths && deaths.value}
              </Typography>
              <Typography variant="h6" component="h2">
                Last update: {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
