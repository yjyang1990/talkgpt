'use client';

import Link from 'next/link';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Footer from '@/app/settings/features/Footer';
import PageTitle from '@/components/PageTitle';
import { useSwitchSideBarOnInit } from '@/store/global/hooks/useSwitchSettingsOnInit';
import { SettingsTabs } from '@/store/global/initialState';

import LLM from './LLM';

export default memo(() => {
  useSwitchSideBarOnInit(SettingsTabs.LLM);
  const { t } = useTranslation('setting');
  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <LLM />
      <Footer>
       
      </Footer>
    </>
  );
});
