// routing
import Routes from 'routes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';

import ThemeCustomization from 'themes';

// auth provider
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchAllProducts } from "./store/slices/landing/skeltonShow";
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());

    }, [dispatch]);

    return (
        <ThemeCustomization>
            <RTLLayout>
                <Locales>
                    <NavigationScroll>
                        <AuthProvider>
                            <>
                                <Routes />
                                <Snackbar />
                            </>
                        </AuthProvider>
                    </NavigationScroll>
                </Locales>
            </RTLLayout>
        </ThemeCustomization>
    )
};

export default App;
