import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const StatCard = ({ title, data }) => {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {data}
      </Typography>
    </React.Fragment>
  );
}

export default StatCard;