'use client';

import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import { motion } from 'framer-motion';

import { CookiesNotify } from '@/components/CookiesNotify';
import { Countdown } from '@/components/ui/Countdown';
import { Button } from '@/components/ui/Button';
import { HeroCardsList } from '@/components/HeroCardsList';

import { fadeInLeft, fadeInRight, fadeInUp } from './variants';
import { apply, about } from '@/constants';

import common from '@/data/common.json';
import hero from '@/data/hero.json';

import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [hideConsent, setHideConsent] = useState(true);

  useEffect(() => {
    setHideConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setHideConsent(true);
    setCookie('localConsent', 'true', {});
  };

  return (
    <>
      <CookiesNotify onClose={acceptCookie} isHidden={hideConsent} />

      <section className="bg hero pb-[128px]">
        <div className="wrapper h-[634px] max-w-[1280px] md:h-[1046px] xl:h-[657px] ">
          <div className="container pt-[152px] md:pt-[302px] xl:pt-[167px]">
            <h1 className="visually-hidden">{hero.header}</h1>
            <h2 className="mb-28 flex flex-col content-between gap-6 md:mb-[234px]  md:gap-10 xl:mb-[88px] xl:flex-row xl:justify-between">
              <motion.span
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                className="heading2 shadow-text max-w-xs md:text-xxxl_small"
              >
                {hero.title}
              </motion.span>
              <motion.span
                variants={fadeInRight}
                initial="initial"
                animate="animate"
                className=" max-w-xs self-end text-right font-dela_gothic text-l uppercase text-shadow-text md:max-w-xl md:text-xxl_big xl:max-w-sm xl:text-xxl"
              >
                {hero.subtitle}
              </motion.span>
            </h2>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mb-6 text-center md:mb-8 xl:mb-[150px] xl:flex xl:justify-between"
            >
              <div className="mb-4 xl:mb-0 xl:flex">
                <Countdown
                  into="hero"
                  className="mb-1 xl:mb-0 xl:mr-3 xl:w-[223px]"
                />
                <p className="timer-text relative flex justify-center xl:block xl:max-w-[160px] xl:text-left">
                  <span>{hero.timerTextStart}</span>
                  <span className="block xl:hidden">&nbsp;–&nbsp;</span>
                  <span>{hero.timerTextFinish}</span>
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  tag="a"
                  accent={false}
                  href={about}
                  className="z-[5] mb-[10px] hidden rounded-button before:content-[''] xl:mb-0 xl:mr-5 xl:block xl:w-[150px] xl:py-[16.5px] xl:text-l_small"
                >
                  {common.buttonsText.v2}
                </Button>
                <Button
                  tag="a"
                  accent={true}
                  href={apply}
                  className="xl:w-[180px]"
                >
                  {common.buttonsText.v3}
                </Button>
              </div>
            </motion.div>

            <HeroCardsList />
          </div>
        </div>
      </section>
    </>
  );
};
