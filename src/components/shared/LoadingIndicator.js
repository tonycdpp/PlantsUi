import React from 'react';
// eslint-disable-next-line
import css from './LoadingIndicator.module.css';
import Loader from "react-loader-spinner"

const LoadingIndicator = (props) => {
  console.log(props);
  return (
        (props.promiseInProgress === true) ?
        <React.Fragment>
            <div
              style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
            </div>
            </React.Fragment>

          :
          null
  )
}
export default LoadingIndicator
