import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
export default function ModalDeleteUser(props) {
  const { show, setShow, dataDelete } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    let data = await postCreateNewUser(email, password, username, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchListUser();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
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
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
