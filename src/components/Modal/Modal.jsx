import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleClickOverlay}>
        <div className={css.modal}>
          <img src={this.props.largeImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageUrl: PropTypes.string,
};
