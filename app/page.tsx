import { Base } from '@/components/ui/base';
import { Container } from '@/components/ui/container';

export default function Home() {
  return (
    <Base>
      <Container className="text-center my-12">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a starter template for your Next.js projects.
        </p>
      </Container>
    </Base>
  );
}
