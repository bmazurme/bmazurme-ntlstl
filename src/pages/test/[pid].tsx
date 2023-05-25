import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div>
      pid:
      {' '}
      { pid }
    </div>
  );
}
