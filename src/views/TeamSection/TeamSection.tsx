import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { TeamList } from '@/components/TeamList';
import { Parallax } from '@/components/ui/Parallax';

import { cases } from '@/constants';

import common from '@/data/common.json';
import team from '@/data/team.json';

export const TeamSection: React.FC = () => {
  return (
    <section className="section bg ">
      <Parallax offset={200} damping={40} stiffness={500} div={true}>
        <div className=" team absolute h-full w-full"></div>
      </Parallax>
      <div className="bg hands container">
        <h2
          className="mb-[56px] max-w-max whitespace-break-spaces text-center font-dela_gothic
         text-xxl_middle uppercase text-shadow-text md:mb-[40px] xl:mb-[48px] xl:text-xxxl_small"
        >
          {team.title[0]}&shy;{team.title[1]}
        </h2>

        <TeamList />
        <Button
          tag="a"
          href={cases}
          accent={false}
          className="mx-auto mt-[48px] shadow-input after:content-[''] md:mt-8 xl:mt-[43px]"
        >
          {common.buttonsText.v5}
          <Icon
            icon="caseArr"
            width={8}
            height={8}
            className="ml-[5px] inline-block -rotate-180"
          />
        </Button>
      </div>
    </section>
  );
};
