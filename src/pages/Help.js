import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function Help() {
    return (
        <Fragment>
            <MetaData title="help" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Help</h5>
                </div>
            </div>
        </Fragment>
    )
}