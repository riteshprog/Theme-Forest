import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.00: '0.00',
  0.01: '0.01',
  0.02: '0.02',
  0.03: '0.03',
  0.04: '0.04',
  0.05: '0.05',
  0.06: '0.06',
  0.07: '0.07',
  0.08: '0.08',
  0.09: '0.09',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
<div>

    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.01}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
    </div>
      );
}