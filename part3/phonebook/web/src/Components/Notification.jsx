import React from "react";

const Notification = (props) => {
  const { success, error } = props;

  if (success !== null) {
    return (
      <div className="success">You have just added {success} successfully!</div>
    );
  }
  if (error !== null) {
    return <div className="error">{error} has already been deleted!</div>;
  }

  return null;
};

export default Notification;
