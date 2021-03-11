import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  text: string;
  size: 'large' | 'medium' | 'small' | undefined;
  color: 'default' | 'inherit' | 'primary' | 'secondary' | undefined;
  onClick: () => {};
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'theme.spacing(0.5)',
  },
  label: {
    textTransform: 'none',
  },
}));
const Button: React.VFC<Props> = (props) => {
  const { variant, text, size, color, onClick, ...others } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...others}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
