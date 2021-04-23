import * as React from "react"
import Alert from "@material-ui/lab/Alert"
import "./scss/error.scss"

interface errorInterface {
  text: string
}

const Error = ({ text }: errorInterface): JSX.Element => {
  return (
    <div className="error">
      <Alert severity="error">{text}</Alert>
    </div>
  )
}

export default Error
