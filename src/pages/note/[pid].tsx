import { useRouter } from 'next/router';
import Content from "../../components/content";

export default function Note() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Content>
      <div>Note</div>
    </Content>
  );
}
