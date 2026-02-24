import { Tooltip } from 'react-tooltip';
import { RiHistoryLine } from 'react-icons/ri';
import 'react-tooltip/dist/react-tooltip.css';

function HistoryButtonWithStyledTooltip() {
    const dynamicContent = `Last updated: ${new Date().toLocaleTimeString()}`;

    return (
        <div>
            <div data-tooltip-id="history-tooltip" data-tooltip-content={dynamicContent}>
                <RiHistoryLine style={{ fontSize: '24px', cursor: 'pointer' }} />
            </div>

            <Tooltip id="history-tooltip" place="top" variant="success" delayShow={300} />
        </div>
    );
}

export default HistoryButtonWithStyledTooltip;
