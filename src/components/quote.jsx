import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Quote({ t, setLang, lang }) {

    const quotes = [
        t("quote1"),
        t("quote2"), //quote3:If nobody complains, the design is probably right.
    ];

  const cycleDuration = 6; // seconds for a full cycle (one quote visible then next)
  const totalCycle = cycleDuration * quotes.length; // full loop time

    return (
        <QuoteSection aria-live="polite">
        <RiDoubleQuotesL className="left-quote" />
        <QuoteInner>
            {quotes.map((q, i) => {
            // Each quote's animation runs for totalCycle seconds and is delayed
            // so that quotes appear one after another.
            const style = {
                animationDelay: `${(cycleDuration * i)}s`,
                animationDuration: `${totalCycle}s`
            };
            return (
                <QuoteItem key={i} style={style} role="text">
                <h2>{q}</h2>
                </QuoteItem>
            );
            })}
        </QuoteInner>
        <RiDoubleQuotesR className="right-quote" />
        </QuoteSection>
    );
}

const QuoteSection = styled.div`
    margin-top: 12px;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: var(--white);
    border-radius: 12px;
    color: var(--blue);
    position: relative;

    svg {
        flex: 0 0 auto;
        font-size: 1.6rem;
        color: var(--blue);
    }
    `;

const QuoteInner = styled.div`
    flex: 1 1 auto;
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

    /* Each QuoteItem is absolutely stacked; CSS animation fades it in/out.
    The animation timeline:
        0%   -> invisible
        5%   -> fade in
        25%  -> visible
        30%  -> fade out
        100% -> stay invisible until next loop
    The durations are tuned so only one quote shows at a time and there's a gap between transitions.
    */
const QuoteItem = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;

    h2 {
        margin: 0;
        font-style: italic;
        font-weight: 400;
        line-height: 1.3;

        @media (max-width: 576px) {
            font-size: 20px;
        }
    }

    opacity: 0;
    transform: translateY(6px);
    animation-name: quoteCycle;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both; /* keep final state during its visible window */

    @keyframes quoteCycle {
        /* the keyframe percentages are relative to the per-item animationDuration */
        0%   { opacity: 0; transform: translateY(6px); }
        5%   { opacity: 1; transform: translateY(0); }    /* fade in quickly */
        45%  { opacity: 1; transform: translateY(0); }    /* stay visible */
        50%  { opacity: 0; transform: translateY(-6px); } /* fade out */
        100% { opacity: 0; transform: translateY(-6px); } /* wait offscreen until next loop */
    }
`;
