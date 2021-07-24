import React from 'react';
import LayoutOptions from "./LayoutOptions";
import ColorOptions from "./ColorOptions";

const TabConfig = () => {
    return (
        <React.Fragment>
            <ColorOptions />
            <LayoutOptions/>
        </React.Fragment>
    );
};

export default TabConfig;
