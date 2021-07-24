import React, { useContext } from 'react';

import { ConfigContext } from "../../../contexts/ConfigContext";
import useWindowSize from "../../../hooks/useWindowSize";

import NavContent from "./NavContent";
import navigation from "../../../menu-items";

const Navigation = () => {
    const configContext = useContext(ConfigContext);
    const { layout, layoutType, navFixedLayout, collapseMenu, rtlLayout, boxLayout, subLayout, headerFixedLayout } = configContext.state;
    const windowSize = useWindowSize();

    const scroll = () => {
        if (navFixedLayout && headerFixedLayout === false) {
            const main = document.querySelector('.pcoded-navbar');
            const el = document.querySelector('.pcoded-navbar.menupos-fixed');
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 60) {
                el.style.position = 'fixed';
                el.style.transition = 'none';
                el.style.marginTop = '0';
            } else {
                main.style.position = 'absolute';
                main.style.marginTop = '56px';
            }
        } else {
            document.querySelector('.pcoded-navbar').removeAttribute('style');
        }
    };

    let navClass = [
        'pcoded-navbar',
        layoutType
    ];

    if (layout === 'horizontal') {
        navClass = [ ...navClass, 'theme-horizontal'];
    } else {
        if (navFixedLayout) {
            navClass = [ ...navClass, 'menupos-fixed'];
        }

        if (navFixedLayout && !headerFixedLayout) {
            window.addEventListener('scroll', scroll, true);
            window.scrollTo(0, 0);
        } else {
            window.removeEventListener('scroll', scroll, false);
        }
    }

    if (windowSize.width < 992 && collapseMenu) {
        navClass = [...navClass, 'mob-open'];
    } else if (collapseMenu) {
        navClass = [...navClass, 'navbar-collapsed'];
    }

    if (layoutType === 'dark') {
        document.body.classList.add('gradient-able-dark');
    } else {
        document.body.classList.remove('gradient-able-dark');
    }

    if (rtlLayout) {
        document.body.classList.add('gradient-able-rtl');
    } else {
        document.body.classList.remove('gradient-able-rtl');
    }

    if (boxLayout) {
        document.body.classList.add('container');
        document.body.classList.add('box-layout');
    } else {
        document.body.classList.remove('container');
        document.body.classList.remove('box-layout');
    }

    let navBarClass = ['navbar-wrapper'];
    if (layout === 'horizontal' && subLayout === 'horizontal-2') {
        navBarClass = [...navBarClass, 'container'];
    }
    let navContent = (
        <div className={navBarClass.join(' ')}>
            <NavContent navigation={navigation.items} />
        </div>
    );
    if (windowSize.width < 992) {
        navContent = (
            <div className="navbar-wrapper">
                <NavContent navigation={navigation.items} />
            </div>
        );
    }
    return (
        <React.Fragment>
            <nav className={navClass.join(' ')}>
                {navContent}
            </nav>
        </React.Fragment>
    );
};

export default Navigation;
