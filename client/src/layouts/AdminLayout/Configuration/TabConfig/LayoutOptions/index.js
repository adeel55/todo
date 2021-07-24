import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { ConfigContext } from "../../../../../contexts/ConfigContext";
import * as actionType from "../../../../../store/actions";

const LayoutOptions = () => {
    const configContext = useContext(ConfigContext);
    const { rtlLayout, navFixedLayout, headerFixedLayout, boxLayout } = configContext.state;
    const { dispatch } = configContext;

    let layoutOption = (
        <div className="form-group mb-0">
            <Form.Check as='input' type="switch" label='Box Layouts' id="box-layouts" checked={boxLayout} onChange={() => dispatch({type: actionType.BOX_LAYOUT})} />
        </div>
    );

    let layoutOptionHeaderFixWithoutBox = '';
    let layoutOptionNavFixWithoutBox = '';
    if (!boxLayout) {
        layoutOptionHeaderFixWithoutBox = (
            <div className="form-group mb-0">
                <Form.Check as='input' type="switch" label='Header Fixed' id="header-fixed" checked={headerFixedLayout} onChange={() => dispatch({type: actionType.HEADER_FIXED_LAYOUT})} />
            </div>
        );
        layoutOptionNavFixWithoutBox = (
            <div className="form-group mb-0">
                <Form.Check as='input' type="switch" label='Sidebar Fixed' id="menu-fixed" checked={navFixedLayout} onChange={() => dispatch({type: actionType.NAV_FIXED_LAYOUT})} />
            </div>
        );
    }

    layoutOption = (
        <div>
            <div className="form-group mb-0">
                <Form.Check as='input' type="switch" label='RTL' id="theme-rtl" checked={rtlLayout} onChange={() => dispatch({type: actionType.RTL_LAYOUT})} />
            </div>
            {layoutOptionNavFixWithoutBox}
            {layoutOptionHeaderFixWithoutBox}
            {layoutOption}
        </div>
    );
    
    return (
        <React.Fragment>
            <div className="config-scroll">
                <PerfectScrollbar>
                    {layoutOption}
                </PerfectScrollbar>
            </div>
        </React.Fragment>
    );
};

export default LayoutOptions;
