import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardTitle from './title';
import styles from './card.module.css';
import Modal from 'react-bootstrap/Modal';
import CardModal from '../card-modal';
import CardBootstrap from 'react-bootstrap/Card';

const Card = ({ title, body, comments, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CardBootstrap className={styles.card} onClick={handleShow}>
        <CardBootstrap.Body>
          <CardTitle title={title} id={id} />
          {comments ? comments.length : null}
        </CardBootstrap.Body>
      </CardBootstrap>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <CardModal title={title} body={body} id={id} comments={comments} />
        </Modal.Body>
      </Modal>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes
    .arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.number.isRequired,
        card: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    )
    .isRequired,
};

export default Card;
