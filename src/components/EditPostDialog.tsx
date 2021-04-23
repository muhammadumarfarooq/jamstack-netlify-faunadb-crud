import * as React from "react"
import Dialog from "@material-ui/core/Dialog"
import PostForm from "./PostForm"

interface editPostDialogInterface {
  handleClose: () => void
  open: boolean
  postToEdit: postInterface
  handleSubmit: ({ title, description }: Post) => void
}

const EditPostDialog = ({ handleClose, open, postToEdit, handleSubmit }: editPostDialogInterface) => {
  const { title, description, id } = postToEdit
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <PostForm
        handleSubmit={handleSubmit}
        id={id}
        title={title}
        description={description}
        buttonText="Save"
      />
    </Dialog>
  )
}

EditPostDialog.propTypes = {}

export default EditPostDialog
