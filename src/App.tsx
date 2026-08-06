import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge/Badge';
import { Tabs } from './components/Tabs/Tabs';
import { TextField } from './components/TextField/TextField';
import { Separator } from './components/Separator/Separator';
import { ColorsDoc } from './components/ColorsDoc/ColorsDoc';

const tabItems = [
  { value: 'overview', label: 'Overview' },
  { value: 'financials', label: 'Financials' },
  { value: 'peers', label: 'Peers' },
];

function App() {
  const [tab, setTab] = useState('overview');

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <h1 style={{ fontFamily: 'var(--font-heading)' }}>Neo-DS Design System</h1>

      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="solid" type="primary">
            Primary
          </Button>
          <Button variant="outline" type="primary">
            Outline
          </Button>
          <Button variant="text" type="primary">
            Text
          </Button>
        </div>
      </section>

      <Separator />

      <section>
        <h2>Badges</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge color="brand">New</Badge>
          <Badge color="positive">IPO</Badge>
          <Badge color="negative" variant="outline">
            Alert
          </Badge>
        </div>
      </section>

      <Separator emphasis="low-emp" />

      <section>
        <h2>Tabs</h2>
        <Tabs items={tabItems} value={tab} onChange={setTab} />
      </section>

      <section>
        <h2>Text field</h2>
        <TextField label="Search" supportingText="Try a stock symbol" />
      </section>

      <section>
        <h2>Colors</h2>
        <ColorsDoc />
      </section>
    </div>
  );
}

export default App;
