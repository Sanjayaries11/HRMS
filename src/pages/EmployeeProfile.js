import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function EmployeeProfile() {
    return (
        <Fragment>
            <MetaData title="Profile" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Employee Profile</h5>
                </div>
            </div>
        </Fragment>

    )
}