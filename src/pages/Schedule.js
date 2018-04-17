import React from "react";
import Table from 'react-bootstrap/lib/Table'

const Schedule = () => (
    <div>
        <h2>Schedule</h2>
        <p className="lead">We normally meet at 6:15 on a Wednesday during school term times. Below is our latest schedule.</p>
        <Table bordered>
            <tbody>
                <tr><td>	18 April	</td><td>	Freeze Frame	</td></tr>
                <tr><td>	25 April	</td><td>	Photo Challenge	</td></tr>
                <tr><td>	2 May	</td><td>	May Food Feast	</td></tr>
                <tr><td>	9 May	</td><td>	May Food Feast	</td></tr>
                <tr><td>	16 May	</td><td>	May Food Feast	</td></tr>
                <tr><td>	23 May	</td><td>	May Food Feast	</td></tr>
                <tr className="active"><td>	30 May	</td><td>	Half term	</td></tr>
                <tr><td>	6 June	</td><td>	Club Night	</td></tr>
                <tr><td>	13 June	</td><td>	Club Night	</td></tr>
                <tr><td>	20 June	</td><td>	Club Night	</td></tr>
                <tr><td>	27 June	</td><td>	Club Night	</td></tr>
                <tr><td>	4 July	</td><td>	Club Night	</td></tr>
                <tr><td>	11 July	</td><td>	Club Night	</td></tr>
                <tr><td>	18 July	</td><td>	Club Night	</td></tr>
                <tr className="active"><td>	25 July	</td><td>	Summer Holiday	</td></tr>
            </tbody>
        </Table>
    </div>
);

export default Schedule;
