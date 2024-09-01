import { ElementType, FC, useState } from 'react';

import DashboardBody from './DashboardBody';
import DashboardNavigation from './DashboardNavigation';
import DashboardProvider from './DashboardProvider';
import DashboardSidebar from './DashboardSidebar';

import template from '/images/icons/template.svg';
import compass from '/images/icons/compass.svg';
import collection from '/images/icons/collection.svg';
import brands from '/images/icons/brands.svg';
import { SimpleText } from '../../components/typography';
import Header from '../../components/header/Header';
import Avatar from '../../components/avatar/Avatar';
import LockedFeature from '../../components/locked-feature/LockedFeature';
import circle from '/images/circle.svg';
import { DotsHorizontal } from 'heroicons-react';

interface DashboardRouteProps {
  component: ElementType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const DashboardRoute: FC<DashboardRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <DashboardProvider>
      <Header setHeaderHeight={setHeaderHeight} />
      <div className="flex h-screen-hack overflow-hidden bg-white">
        <DashboardSidebar headerHeight={headerHeight}>
          <DashboardNavigation className="space-y-6">
            <div className="space-y-3 px-3">
              <DashboardNavigation
                item
                href={'/dashboard/inspiration'}
                icon={compass}
              >
                Inspiration
              </DashboardNavigation>
              <DashboardNavigation
                item
                href={'/dashboard/templates'}
                icon={template}
              >
                Templates
              </DashboardNavigation>
              <DashboardNavigation
                item
                href={'/dashboard/collections'}
                icon={collection}
              >
                Collections
              </DashboardNavigation>
              <DashboardNavigation item href="/dashboard/brands" icon={brands}>
                Brands
              </DashboardNavigation>
            </div>
            <hr />
            <div className="px-3">
              <SimpleText component="small">FEATURED</SimpleText>
              <div className="pl-3">
                <DashboardNavigation
                  item
                  href={`/dashboard/hidden-gems`}
                  // icon={labSlab}
                >
                  Hidden gems <LockedFeature />
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/evergreen-ads">
                  Evergreen ads <LockedFeature />
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/testing-lab">
                  Testing lab <LockedFeature />
                </DashboardNavigation>
              </div>
            </div>
            <hr />
            <div className="px-3 space-y-3">
              <SimpleText component="small">SAVED</SimpleText>
              <div className="pl-3 border-l border-indigo-500">
                <DashboardNavigation item href={`/dashboard/`}>
                  All Saved{' '}
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/untitled-board-1">
                  <div className="flex items-center justfy-end gap-5 w-full">
                    Board name{' '}
                    <DotsHorizontal
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/untitled-board-2">
                  <div className="flex items-center justfy-end gap-5 w-full">
                    Board name{' '}
                    <DotsHorizontal
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/untitled-board-3">
                  <div className="flex items-center justfy-end gap-5 w-full">
                    Board name{' '}
                    <DotsHorizontal
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/untitled-board-4">
                  <div className="flex items-center justfy-end gap-5 w-full">
                    Board name{' '}
                    <DotsHorizontal
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </DashboardNavigation>
                <DashboardNavigation item href="/dashboard/untitled-board-5">
                  <div className="flex items-center justfy-end gap-5 w-full">
                    Board name{' '}
                    <DotsHorizontal
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </DashboardNavigation>
              </div>
              <SimpleText>View all boards</SimpleText>
            </div>
            <hr />
            <div className="px-3">
              <DashboardNavigation item href="/dashboard/settings">
                Settings
              </DashboardNavigation>
              <DashboardNavigation item href="/dashboard/help-and-feedback">
                Help & Feedback
              </DashboardNavigation>
              <DashboardNavigation item href="/dashboard/join-slack">
                Join the CreativeOS Slack
              </DashboardNavigation>
              <div className="space-y-4">
                <hr />
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar src={circle} size="w-10 h-10" />
                    <SimpleText>My Account</SimpleText>
                  </div>
                </div>
              </div>
            </div>
          </DashboardNavigation>
        </DashboardSidebar>
        <DashboardBody>
          <Component {...rest} />
        </DashboardBody>
      </div>
    </DashboardProvider>
  );
};

export default DashboardRoute;
