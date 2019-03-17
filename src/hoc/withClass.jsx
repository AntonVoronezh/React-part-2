import React from "react";

const withClass = (Component, argClass) => {
    return props => {
        return (
            <div className={argClass}>
                <Component {...props} />
            </div>
        )
    }
}

export default withClass;