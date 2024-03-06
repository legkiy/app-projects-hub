import { Button, StoreDataDisplay } from '@UI';

export default function Home() {
  return (
    <main>
      <StoreDataDisplay storePath="counter.value" />
      <Button>inc</Button>
    </main>
  );
}
