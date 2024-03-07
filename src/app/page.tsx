import { Button, StoreDataDisplay } from '@UI';

export default function Home() {
  return (
    <>
      <StoreDataDisplay storePath="counter.value" />
      <Button>inc</Button>
    </>
  );
}
