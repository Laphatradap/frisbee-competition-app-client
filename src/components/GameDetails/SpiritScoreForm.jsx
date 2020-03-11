import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { SpiritItem } from "./SpiritItem";
import { addSpiritScore } from "../../store/game/actions";
import { clubBoard, superAdmin } from "../endpointRoles";

const styles = theme => ({
  padding: {
    padding: theme.spacing(0.5)
  },
  margin: {
    margin: "30px 0"
  },
  minWidth: {
    minWidth: "250px"
  }
});

export class SpiritScoreForm extends Component {
  state = {
    RKUScore: 2,
    RKUComment: "",
    FNBScore: 2,
    FNBComment: "",
    FMScore: 2,
    FMComment: "",
    PASCScore: 2,
    PASCComment: "",
    COMMScore: 2,
    COMMComment: "",
    generalComment: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { game, spiritScoreFor } = this.props;
    const { id } = game;

    const spiritScoreData = {
      ...this.state,
      spiritScoreFor,
      gameId: id
    };

    this.props.addSpiritScore(spiritScoreData, id);

    this.setState({
      RKUScore: 2,
      RKUComment: "",
      FNBScore: 2,
      FNBComment: "",
      FMScore: 2,
      FMComment: "",
      PASCScore: 2,
      PASCComment: "",
      COMMScore: 2,
      COMMComment: "",
      generalComment: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.padding}>
        <form onSubmit={this.onSubmit} className={classes.minWidth}>
          <div>
            <SpiritItem
              label={"Rules, Knowledge & Use"}
              scoreName={"RKUScore"}
              commentName={"RKUComment"}
              comment={this.state.RKUComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fouls & Body Contact"}
              scoreName={"FNBScore"}
              commentName={"FNBComment"}
              comment={this.state.FNBComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fairmindedness"}
              scoreName={"FMScore"}
              commentName={"FMComment"}
              comment={this.state.FMComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Positive Attitude & Self-Control"}
              scoreName={"PASCScore"}
              commentName={"PASCComment"}
              comment={this.state.PASCComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Communication"}
              scoreName={"COMMScore"}
              commentName={"COMMComment"}
              comment={this.state.COMMComment}
              change={this.onChange}
            />
          </div>
          <TextField
            multiline
            name="generalComment"
            label="Comment on the game"
            rows="4"
            rowsMax="4"
            value={this.state.generalComment}
            onChange={this.onChange}
          />
          <Button color="primary" style={{ margin: "10px" }} type="submit">
            Submit
          </Button>
          <Button
            type="button"
            color="default"
            style={{ margin: "10px" }}
            onClick={this.props.toggleSpiritForm}>
            Cancel
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
  game: state.game.data
});

const mapDispatchToProps = { addSpiritScore };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SpiritScoreForm)
);
