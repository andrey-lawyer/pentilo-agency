'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import data from '@/data/qa.json';

import { ElementAccordion } from '@/components/ElementAccordion';
import { AccordionButtonIcon } from '../AccordionButtonIcon';

export const Accordion = () => {
  const [firstShown, setFirstShown] = useState(true);
  const [secondShown, setSecondShown] = useState(false);
  const [thirdShown, setThirdShown] = useState(false);

  const { accordeon } = data;

  const onClickShow = (ind: number) => {
    switch (ind) {
      case 0:
        setFirstShown(prevState => !prevState);
        break;
      case 1:
        setSecondShown(prevState => !prevState);
        break;
      case 2:
        setThirdShown(prevState => !prevState);
        break;
    }
  };

  return (
    <ul className="text-s_middle_middle flex w-full flex-col gap-10 md:w-[508px] xl:w-[580px]">
      {accordeon.map(({ title, description }, ind) => (
        <li key={ind}>
          <button
            className="mb-[18px] flex w-[100%] items-center justify-between font-dela_gothic uppercase  xl:mb-6"
            type="button"
            onClick={() => {
              onClickShow(ind);
            }}
          >
            {title}
            <AnimatePresence mode="wait" initial={false}>
              {ind === 0 && <AccordionButtonIcon state={firstShown} />}
              {ind === 1 && <AccordionButtonIcon state={secondShown} />}
              {ind === 2 && <AccordionButtonIcon state={thirdShown} />}
            </AnimatePresence>
          </button>

          <AnimatePresence initial={false}>
            {ind === 0 && firstShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
            {ind === 1 && secondShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
            {ind === 2 && thirdShown && (
              <ElementAccordion description={description} ind={ind} />
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};
