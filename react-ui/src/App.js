import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

//-----------------------|| APP ||-----------------------//

const App = () => {
    const customization = useSelector((state) => state.customization);
    useEffect(() => {
        document.body.setAttribute('dir', customization.direction);
        document.documentElement.setAttribute('dir', customization.direction);
    }, [customization.direction]);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme(customization, customization.direction)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
