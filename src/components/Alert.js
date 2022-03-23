import React from 'react'

function Alert(props) {



    const capitalize = (str) => {
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2
    }
    return (
        <>
            <div style={{height: "5vh"}}>
                {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.message}
                </div>}
            </div>

        </>
    )
}

export default Alert