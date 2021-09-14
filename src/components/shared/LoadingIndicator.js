import React from 'react';
import css from './LoadingIndicator.module.css';
import Loader from "react-loader-spinner"

const LoadingIndicator = (props) => {
  console.log(props);
  return (
    <div>
      {
        (props.promiseInProgress === true) ?

          <div>
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
          </div>

          :
          null
      }
    </div>
  )
}
export default LoadingIndicator
