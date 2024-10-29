import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function Ticket() {
    return (
        <Fragment>
            <MetaData title="ticket" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Ticket</h5>
                </div>
            </div>
        </Fragment>
    )
}