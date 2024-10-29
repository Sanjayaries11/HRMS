import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function EmployeePermission() {
    return (
        <Fragment>
            <MetaData title="permission" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Employee Permission</h5>
                </div>
            </div>
        </Fragment>
    )
}