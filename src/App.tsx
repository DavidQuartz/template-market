import './index.css';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DashboardRoute } from './layout/dashboard';

const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'));
const BrandsPage = lazy(() => import('./Pages/Brands/Brands'));
const FunnelPage = lazy(() => import('./Pages/Brands/Funnel'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/dashboard/*"
            Component={(props) => (
              <DashboardRoute component={Dashboard} {...props} />
            )}
          >
            <Route path="brands/*" Component={BrandsPage}>
              <Route path="funnels" Component={FunnelPage} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
