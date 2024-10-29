import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function Leave() {
    return (
        <Fragment>
            <MetaData title="leave" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Leave Log</h5>
                </div>
            </div>
        </Fragment>
    )
}