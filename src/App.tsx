import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge/Badge';
import { Tabs } from './components/Tabs/Tabs';
import { TextField } from './components/TextField/TextField';
import { Separator } from './components/Separator/Separator';
import { ColorsDoc } from './components/ColorsDoc/ColorsDoc';
import { StockCard } from './components/StockCard/StockCard';
import { List } from './components/List/List';
import { ListItem } from './components/List/ListItem';
import { LineChart } from './components/Charts/LineChart';
import { BarChart } from './components/Charts/BarChart';
import { Legend } from './components/Charts/Legend';
import { ChartDot } from './components/Charts/ChartDot';

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
        <h2>Stock cards</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <StockCard
            logo={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-accent1-tertiary)' }} />}
            name="HDFC Bank"
            price="1,487"
            priceDecimal=".00"
            changeValue="-8.01"
            changePercent="0.12%"
            direction="down"
            highlight
          />
          <StockCard
            logo={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-accent1-tertiary)' }} />}
            name="Reliance"
            price="2,940"
            priceDecimal=".50"
            changeValue="+12.40"
            changePercent="0.84%"
            direction="up"
            variant="with-badge"
            badgeLabel="F&O"
          />
          <StockCard
            logo={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-accent1-tertiary)' }} />}
            name="TCS"
            price="3,820"
            priceDecimal=".00"
            changeValue="+4.10"
            changePercent="0.11%"
            direction="up"
            variant="insights"
            insightsNote="Dividend announced"
          />
        </div>
      </section>

      <section>
        <h2>List</h2>
        <List>
          <ListItem title="Notifications" trailing="›" onClick={() => {}} />
          <ListItem title="Two-factor authentication" subtitle="Add an extra layer of security" trailing="›" onClick={() => {}} divider={false} />
        </List>
      </section>

      <section>
        <h2>Charts</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-neutral-secondary)' }}>Line (positive)</p>
            <LineChart values={[162, 165, 163, 168, 170, 167, 172, 175, 173, 178]} direction="positive" width={280} height={100} />
          </div>
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-neutral-secondary)' }}>Bar</p>
            <BarChart
              height={100}
              bars={[
                { label: 'Mon', value: 40 },
                { label: 'Tue', value: 65 },
                { label: 'Wed', value: 30 },
                { label: 'Thu', value: 80, selected: true },
              ]}
            />
          </div>
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-neutral-secondary)' }}>Legend</p>
            <Legend
              stacked
              items={[
                { label: 'Promoters', value: '52.3%', color: 'var(--fill-accent1-primary)' },
                { label: 'FII', value: '18.1%', color: 'var(--fill-positive-primary)' },
              ]}
            />
          </div>
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-neutral-secondary)' }}>Chart dot</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <ChartDot color="positive" pulse />
              <ChartDot color="negative" pulse />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Colors</h2>
        <ColorsDoc />
      </section>
    </div>
  );
}

export default App;
