import Hero from './Hero';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Siyam</title>
      </Helmet>
      <Hero />
    </section>
  );
}
