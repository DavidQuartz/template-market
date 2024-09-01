import Button from '../../components/button/Button';
import { SimpleText } from '../../components/typography';
import { DashboardContent } from '../../layout/dashboard';
import { useLocation, Link, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import LockedFeature from '../../components/locked-feature/LockedFeature';

const BrandsPage = () => {
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to;

  return (
    <DashboardContent>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="/brands"
              role="button"
            >
              Back
            </Button>
          </div>
          <div>
            <SimpleText>Brand name</SimpleText>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div>
            <SimpleText>Show:</SimpleText>
          </div>
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="templates"
              role="button"
              className={clsx('inline-flex items-center', {
                'bg-custom-gradient text-white': isActive('/brands/templates'),
              })}
            >
              Templates
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="email"
              role="button"
              className={clsx(
                'inline-flex items-center',
                'inline-flex items-center',
                {
                  'bg-custom-gradient text-white': isActive('/brands/email'),
                },
              )}
            >
              <div className="flex items-center gap-2">
                <SimpleText>Email</SimpleText>
                <LockedFeature />
              </div>
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="landers"
              role="button"
              className={clsx('inline-flex items-center', {
                'bg-custom-gradient text-white': isActive('/brands/landers'),
              })}
            >
              <div className="flex items-center gap-2">
                <SimpleText>Landers</SimpleText>
                <LockedFeature />
              </div>
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="funnels"
              role="button"
              className={clsx('inline-flex items-center', {
                'bg-custom-gradient text-white': isActive('/brands/funnels'),
              })}
            >
              <div className="flex items-center gap-2">
                <SimpleText>Funnels</SimpleText>
                <LockedFeature />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Button variant="outlined">Save</Button>
          </div>
          <div>
            <Button variant="outlined">Share</Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-6">
        <Outlet />
      </div>
    </DashboardContent>
  );
};

export default BrandsPage;
