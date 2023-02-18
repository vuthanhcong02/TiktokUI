import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter, privateRouter } from './routers';
import { DefaultLayout } from './Layout';
import { HeaderOnly } from './Layout';
import { Fragment } from 'react';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    {publicRouter.map((route, index) => {
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
                </Routes>
            </Router>
        </>
    );
}
export default App;
