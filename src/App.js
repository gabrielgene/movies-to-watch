import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Topbar from './components/topbar';
import Movies from './components/movies';
import { moviesData } from './movies';

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 10,
  },
  root: {
    margin: theme.spacing.unit * 2,
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  state = {
    checked: [],
    data: [],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    currentIndex === -1 ?
      newChecked.push(value) :
      newChecked.splice(currentIndex, 1);

    localStorage.setItem('data', JSON.stringify(newChecked));
    this.setState({
      checked: newChecked,
    });
  };

  componentDidMount() {
    const localData = localStorage.getItem('data');
    if (localData === null) {
      this.setState({
        data: moviesData,
      });
    } else {
      const checked = JSON.parse(localData);
      this.setState({
        data: moviesData,
        checked,
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { data, checked } = this.state;

    return (
      <div>
        <Topbar />
        <div className={classes.content}>
          <div className={classes.root}>
            {
              data.map(m => (
                <Movies
                  key={m.link}
                  {...m}
                  onChange={this.handleToggle}
                  checked={checked}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
