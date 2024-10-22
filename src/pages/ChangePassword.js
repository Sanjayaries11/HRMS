import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function ChangePassword() {
    return (
        <Fragment>
            <MetaData title="ChangePassword" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">Change Password</h5>
                </div>
            </div>
        </Fragment>
    )
}