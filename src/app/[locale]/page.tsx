import { LocaleSwither } from '@/features';
import ThemeToggle from '@/features/ThemeToggle/ThemeToggle';
import { Button, StoreDataDisplay } from '@UI';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <LocaleSwither />
      <h1>{t('hello')}</h1>
      <ThemeToggle />
      <Button>inc</Button>
      <StoreDataDisplay storePath="counter.value" />
    </>
  );
}
