import React from "react";

const withClass = (argComponent, argClass) => {
    return props => {
        return (
            <div className={argClass}>
                <argComponent />
            </div>
        )
    }
}