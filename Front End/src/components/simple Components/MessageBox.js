import React from "react";
import PropTypes from 'prop-types';

export default function MessageBox({children}) {
  return (
    <>
      <div style={{width:"100%",padding:"10px",backgroundColor:"#FFDBDB",color:"#B60000",borderRadius:"5px",marginTop:"10px"}}>
          <p>{children}</p>
      </div>
    </>
  );
}

MessageBox.propTypes = {
    children : PropTypes.any
}