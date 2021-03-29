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
                Role: {role}
            </div>
    );
}

export default role;