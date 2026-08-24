import './BananaButton.css'

import skaftDefault from './assets/skaft-default.svg'
import skalDefault from './assets/skal-default.svg'
import ljusDefault from './assets/ljus-default.svg'
import spetsDefault from './assets/spets-default.svg'
import skaftToppDefault from './assets/skaft-topp-default.svg'
import skaftHover from './assets/skaft-hover.svg'
import skalHover from './assets/skal-hover.svg'
import ljusHover from './assets/ljus-hover.svg'
import spetsHover from './assets/spets-hover.svg'
import skaftToppHover from './assets/skaft-topp-hover.svg'

/**
 * Props för Banana-knappen.
 */
export interface BananaButtonProps {
  /** Beskrivning för skärmläsare – knappen har ingen synlig text. */
  ariaLabel: string
  /** Inaktiverar knappen så den inte går att klicka. */
  disabled?: boolean
  /** Anropas när användaren klickar på knappen. */
  onClick?: () => void
}

/**
 * Ikon-knapp från NPA-designsystemet: en banan som byter färg vid hover.
 *
 * Grafiken kommer direkt från Figma-exporten (fem lager per tillstånd) –
 * `state=Default`/`state=Hover` görs med två lagrade lagerstaplar som
 * togglas via CSS `:hover`, precis som i Figma-komponenten.
 */
export function BananaButton({ ariaLabel, disabled = false, onClick }: BananaButtonProps) {
  return (
    <button
      type="button"
      className="npa-banana-button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="npa-banana-button__state npa-banana-button__state--default" aria-hidden="true">
        <img src={skaftDefault} alt="" className="npa-banana-button__layer npa-banana-button__layer--skaft" />
        <img src={skalDefault} alt="" className="npa-banana-button__layer npa-banana-button__layer--skal" />
        <img src={ljusDefault} alt="" className="npa-banana-button__layer npa-banana-button__layer--ljus" />
        <img src={spetsDefault} alt="" className="npa-banana-button__layer npa-banana-button__layer--spets" />
        <span className="npa-banana-button__skaft-topp-wrap">
          <span className="npa-banana-button__skaft-topp-box">
            <img src={skaftToppDefault} alt="" className="npa-banana-button__skaft-topp-img" />
          </span>
        </span>
      </span>

      <span className="npa-banana-button__state npa-banana-button__state--hover" aria-hidden="true">
        <img src={skaftHover} alt="" className="npa-banana-button__layer npa-banana-button__layer--skaft" />
        <img src={skalHover} alt="" className="npa-banana-button__layer npa-banana-button__layer--skal" />
        <img src={ljusHover} alt="" className="npa-banana-button__layer npa-banana-button__layer--ljus" />
        <img src={spetsHover} alt="" className="npa-banana-button__layer npa-banana-button__layer--spets" />
        <span className="npa-banana-button__skaft-topp-wrap">
          <span className="npa-banana-button__skaft-topp-box">
            <img src={skaftToppHover} alt="" className="npa-banana-button__skaft-topp-img" />
          </span>
        </span>
      </span>
    </button>
  )
}
