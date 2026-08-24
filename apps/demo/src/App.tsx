import { useState } from 'react'
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  RadioGroup,
  Select,
  Tabs,
  Textarea,
  Toggle,
  Tooltip,
} from 'npa-ng-test'

/**
 * Liten demo-app som använder komponenterna från npa-ng-test.
 * All styling kommer från designsystemets tokens (importerade i main.tsx).
 */
export function App() {
  const [kommun, setKommun] = useState('')
  const [godkant, setGodkant] = useState(false)
  const [notiser, setNotiser] = useState(true)
  const [kontakt, setKontakt] = useState('email')
  const [skickat, setSkickat] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-bg-subtle)',
        padding: 'var(--spacing-xl)',
        fontFamily: 'var(--font-family)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
          <h1 style={{ margin: 0, fontSize: 'var(--font-h2-size)', color: 'var(--color-text-primary)' }}>
            Producentrapport
          </h1>
          <Badge label="Utkast" status="neutral" />
        </header>

        {skickat && (
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Alert type="success" title="Inskickat">
              Tack! Din rapport har tagits emot och väntar på granskning.
            </Alert>
          </div>
        )}

        <Tabs
          tabs={[
            {
              label: 'Uppgifter',
              content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)' }}>
                  <Input label="Organisationsnummer" placeholder="ÅÅMMDD-XXXX" required />
                  <Select
                    label="Kommun"
                    placeholder="Välj kommun…"
                    value={kommun}
                    onChange={setKommun}
                    options={[
                      { label: 'Stockholm', value: 'stockholm' },
                      { label: 'Göteborg', value: 'goteborg' },
                      { label: 'Malmö', value: 'malmo' },
                    ]}
                  />
                  <Textarea
                    label="Kommentar"
                    placeholder="Eventuella noteringar till handläggaren…"
                    helperText="Frivilligt."
                  />
                  <RadioGroup
                    legend="Hur vill du bli kontaktad?"
                    value={kontakt}
                    onChange={setKontakt}
                    options={[
                      { label: 'E-post', value: 'email' },
                      { label: 'SMS', value: 'sms' },
                      { label: 'Brev', value: 'post' },
                    ]}
                  />
                </div>
              ),
            },
            {
              label: 'Inställningar',
              content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)' }}>
                  <Toggle label="Skicka notiser via e-post" checked={notiser} onChange={setNotiser} />
                  <Tooltip content="Sparar uppgifterna till nästa rapport.">
                    <Checkbox label="Kom ihåg mina uppgifter" checked={false} onChange={() => {}} />
                  </Tooltip>
                </div>
              ),
            },
          ]}
        />

        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <Card showMedia title="Sammanfattning" elevation="low">
            <p style={{ margin: 0 }}>
              Kontroll: kommun {kommun ? <strong>{kommun}</strong> : 'ej vald'}, kontakt via{' '}
              <strong>{kontakt}</strong>.
            </p>
            <div style={{ marginTop: 'var(--spacing-md)' }}>
              <Checkbox
                label="Jag intygar att uppgifterna är korrekta"
                checked={godkant}
                onChange={setGodkant}
              />
            </div>
          </Card>
        </div>

        <footer style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
          <Button
            label="Skicka in rapport"
            variant="primary"
            disabled={!godkant}
            onClick={() => setSkickat(true)}
          />
          <Button label="Avbryt" variant="ghost" onClick={() => setSkickat(false)} />
        </footer>
      </div>
    </div>
  )
}
