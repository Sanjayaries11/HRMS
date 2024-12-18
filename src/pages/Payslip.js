import { Fragment } from "react";
import MetaData from "../components/MetaData";

export default function Payslip() {
    return (
        <Fragment>
            <MetaData title="Payslip" />
            <div className="card">
                <div className="card-block">
                    <h5 className="card-heading">PaySlip</h5>
                </div>
            </div>
        </Fragment>
    )
}