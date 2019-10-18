import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCommentsByCard } from '../../selectors';
import CardTitle from './title';
import Modal from 'react-bootstrap/Modal';
import CardModal from '../card-modal';
import CardBootstrap from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CardRemove from './remove';

const Card = ({ title, body, id, column, author, cardId }) => {
  const [show, setShow] = useState(false);
  const comments = useSelector((state) => getCommentsByCard(state, cardId));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CardBootstrap onClick={handleShow} className="mb-4" >
        <CardBootstrap.Body className="p-2 pt-4">
          <CardTitle title={title} id={id} />
            {comments ? <Badge variant="secondary">{comments.length} comments</Badge> : null}
          <CardRemove id={id} />
        </CardBootstrap.Body>
      </CardBootstrap>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <CardModal title={title} body={body} id={id} comments={comments} column={column} author={author} />
        </Modal.Body>
      </Modal>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default Card;
