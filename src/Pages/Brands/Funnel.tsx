import FunnelCard from '../../components/card/FunnelCard';
import { DashboardGrid } from '../../layout/dashboard';

const Funnel = () => {
  return (
    <DashboardGrid
      className="auto-rows-min100"
      gap="gap-4 md:gap-6"
      columns="grid-cols-1 md:grid-cols-2"
    >
      {[...Array(4)].map((_, index) => (
        <DashboardGrid item span="col-span-1" key={index}>
          <FunnelCard />
        </DashboardGrid>
      ))}
    </DashboardGrid>
  );
};

export default Funnel;
