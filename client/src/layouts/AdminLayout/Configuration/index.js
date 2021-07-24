import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TabConfig from "./TabConfig";
import Layout from "./Layout";

const Configuration = () => {
    const [configOpen, setConfigOpen] = useState(false);

    let configClass = ['menu-styler'];
    if (configOpen) {
        configClass = [...configClass, 'open'];
    }

    return (
        <React.Fragment>
            <div id="styleSelector" className={configClass.join(' ')}>
                <div className="style-toggler">
                    <Link to='#' onClick={() => setConfigOpen(!configOpen)}>*</Link>
                </div>
                <div className="style-block">
                    <h5 className="mb-2">Live Menu Customizer</h5>
                    <hr/>
                    <div className="m-style-scroller">
                        <Layout />
                        <TabConfig />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Configuration;
