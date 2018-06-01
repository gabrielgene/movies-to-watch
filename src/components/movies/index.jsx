import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { CardActions } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex",
    margin: 8,
    [theme.breakpoints.down('sm')]: {
      width: 345,
    },
    [theme.breakpoints.up('sm')]: {
      width: 520,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginTop: 36,
    [theme.breakpoints.down('sm')]: {
      width: 223,
    },
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 220
  },
  actions: {
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.unit * 3,
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      width: 323,
    },
    [theme.breakpoints.down('sm')]: {
      width: 198,
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  wrapper: {
    display: 'inline-block',
  },
});

const Movies = ({ classes, name, link, img, onChange, checked, watch, watchFilter }) => (
  <div className={classes.wrapper}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={img}
        title={name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline" className={classes.text} title={name}>
            {name}
          </Typography>
          <Typography variant="subheading" className={classes.text} color="textSecondary" title={link}>
            <a href={link} target="_blank">
              {link}
            </a>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Typography className={classes.category} title="Categorias">
            Ação, Drama, Suspense
          </Typography>
          <Checkbox
            icon={<Icon>visibility</Icon>}
            checkedIcon={<Icon>visibility_off</Icon>}
            onChange={onChange(link)}
            checked={checked.indexOf(link) !== -1}
            title="Para assistir/assistido"
          />
        </CardActions>
      </div>
    </Card>
  </div>
)
export default withStyles(styles)(Movies);
