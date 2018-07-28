import React, { PureComponent } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import {
  SkipPrevious,
  PlayArrow,
  Pause,
  SkipNext
} from '@material-ui/icons';

export const SIZE_SMALL = 'small';
export const SIZE_MEDIUM = 'medium';
export const DEFAULT_BUFFER_AMOUNT = 0;
class PlayerControls extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      buffer: DEFAULT_BUFFER_AMOUNT
    };
  }

  onProgress = progress => {
    if (progress && progress.loaded && progress.played) {
      this.setState({
        completed: Math.floor(progress.played * 100),
        buffer: Math.floor(progress.loaded * 100)
      });
    }
  }

  previous = () => {
    this.props.onPrevious();
  }

  pause = () => {
    this.props.onPause();
  }

  resume = () => {
    this.props.onResume();
  }

  next = () => {
    this.props.onNext();
  }

  getPreviousButtonProps = () => ({
    variant: 'fab',
    color: 'primary',
    'aria-label': 'Skip Previous',
    mini: true,
    onClick: this.previous
  });

  getPausePlayButtonProps = () => ({
    variant: 'fab',
    color: 'primary',
    'aria-label': 'Play/Pause',
    size: SIZE_MEDIUM,
    onClick: this.props.isPlaying ? this.pause : this.resume
  });

  getNextButtonProps = () => ({
    variant: 'fab',
    color: 'primary',
    'aria-label': 'Skip Next',
    mini: true,
    onClick: this.next
  });

  render() {
    return (
      <div className="player-controls">
        <LinearProgress
          variant='buffer'
          value={this.state.completed}
          valueBuffer={this.state.buffer} />
        <div className="control-actions">
          <Button {...this.getPreviousButtonProps()}>
            <SkipPrevious />
          </Button>
          <Button {...this.getPausePlayButtonProps()}>
            {this.props.isPlaying ? <Pause /> : <PlayArrow />}
          </Button>
          <Button {...this.getNextButtonProps()}>
            <SkipNext />
          </Button>
        </div>
      </div>
    );
  }
}

export default PlayerControls;