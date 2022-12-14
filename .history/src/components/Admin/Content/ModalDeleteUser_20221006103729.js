import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
export default function ModalDeleteUser(props) {
  const { show, setShow, dataDelete } = props;
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    alert("me");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user. email ={" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
