import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import { Text } from '../typography';
import creative from '/images/landing-pages/creative-vertical.png';
import landing from '/images/landing-pages/landing.png';
import woman from '/images/woman.png';

const FunnelCard = () => {
  return (
    <div className="bg-customGray border rounded-md pb-3">
      <div className="py-3 px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar src={woman} size="w-6 h-6" />
            Caraway
          </div>
          <div className="">
            <Button variant="outlined">Save Funnel</Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3 px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-3 mb-3">
            <Text size="md" shade="light">
              Ad Creative
            </Text>
            <div>
              <img src={creative} alt="ad creative" />
            </div>
          </div>
          <div className="space-y-3 mb-3">
            <Text size="md" shade="light">
              Landing Page
            </Text>
            <div>
              <img src={landing} alt="landing" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3 px-5 mt-3">
        <div className="flex items-center justify-end gap-3 flex-wrap">
          <Button variant="outlined">Request Template</Button>
          <Button variant="outlined">View Funnel</Button>
          <Button variant="outlined">Share icon</Button>
        </div>
      </div>
    </div>
  );
};

export default FunnelCard;
