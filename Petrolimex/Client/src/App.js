import { Fragment ,useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

import './App.css';
import { publicRoutes, privateRoutes } from '@/routes';

import DefaultLayout from './layouts/DefaultLayout';
import ProtectedRouter from './components/ProtectedRouter';
import { useContextStore, userAction } from '@/context';
// import { apiGetProfileUser } from '@/services/apis';

function App() {
    // eslint-disable-next-line no-unused-vars
    // const [state, dispatch] = useContextStore();
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await apiGetProfileUser();
    //             if (response.data.statusCode === 2) {
    //                 dispatch(userAction.getUserInfor(response.data));
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };

    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route key={index} element={<ProtectedRouter route={route} />}>
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        </Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
