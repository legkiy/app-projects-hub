import { LocaleSwither } from '@/features';
import { Button, StoreDataDisplay } from '@UI';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <LocaleSwither />
      <h1>{t('hello')}</h1>
      <StoreDataDisplay storePath="counter.value" />
      <Button>inc</Button>
    </>
  );
}
