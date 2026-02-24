import AssociatePlans from './AssociatePlans';
import CardInfo from './CardInfo';
import CardsHistory from './CardsHistrory';
import ActivityLog from './ActivityLog';
const CardDetails = () => {
    return (
        <div>
            <CardInfo />
            <AssociatePlans />
            <div className="row">
                <div className="col-md-7">
                    <CardsHistory />
                </div>
                <div className="col-md-5">
                    <ActivityLog />
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
