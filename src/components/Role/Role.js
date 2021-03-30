import React from 'react';

const role = (props) => {
    let role = '';
    if (props.isManager) {
        role = "Manager"
    } else {
        role = "Normal User"
    }

    return (
            <div>
                Current Role: <strong>{role}</strong>
            </div>
    );
}

export default role;