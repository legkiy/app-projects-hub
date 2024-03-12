'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, useTransition } from 'react';

const LocaleSwither: FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const activeLocal = useLocale();

  const handaleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const targetLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${targetLocale}`);
    });
  };
  return (
    <select
      defaultValue={activeLocal}
      disabled={isPending}
      onChange={handaleChangeLang}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
};
export default LocaleSwither;
