import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';

import { ConfigContext } from "../../../../../contexts/ConfigContext";
import * as actionType from "../../../../../store/actions";

const ColorOptions = () => {
    const configContext = useContext(ConfigContext);
    const { headerBackColor } = configContext.state;
    const { dispatch } = configContext;

    return (
        <React.Fragment>
            <div className="config-scroll">
                <PerfectScrollbar>
                    <h6>header background</h6>
                    <div className="theme-color header-color">
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-blue'})} className={headerBackColor === 'header-blue' ? 'active' : ''} data-value="header-blue"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-red'})} className={headerBackColor === 'header-red' ? 'active' : ''} data-value="header-red"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-purple'})} className={headerBackColor === 'header-purple' ? 'active' : ''} data-value="header-purple"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-info'})} className={headerBackColor === 'header-info' ? 'active' : ''} data-value="header-info"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-dark'})} className={headerBackColor === 'header-dark' ? 'active' : ''} data-value="header-dark"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-orange'})} className={headerBackColor === 'header-orange' ? 'active' : ''} data-value="header-orange"><span/><span/></Link>
                    </div>
                    <div className="theme-color header-color">
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-green'})} className={headerBackColor === 'header-green' ? 'active' : ''} data-value="header-green"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-yellow'})} className={headerBackColor === 'header-yellow' ? 'active' : ''} data-value="header-yellow"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-orchidgreen'})} className={headerBackColor === 'header-orchidgreen' ? 'active' : ''} data-value="header-orchidgreen"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-indigogreen'})} className={headerBackColor === 'header-indigogreen' ? 'active' : ''} data-value="header-indigogreen"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-darkgreen'})} className={headerBackColor === 'header-darkgreen' ? 'active' : ''} data-value="header-darkgreen"><span/><span/></Link>
                        <Link to='#' onClick={() => dispatch({type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-darkblue'})} className={headerBackColor === 'header-darkblue' ? 'active' : ''} data-value="header-darkblue"><span/><span/></Link>
                    </div>
                </PerfectScrollbar>
            </div>
        </React.Fragment>
    );
};

export default ColorOptions;
