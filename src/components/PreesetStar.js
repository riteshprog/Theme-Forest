import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
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
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
<div>

    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
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