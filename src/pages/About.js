import React from "react";
import PersonItem from "../components/PersonItem";
import chris from "../img/chris.png";
import person from "../img/person.png";

const About = () => (
    <div>
        <h2>About</h2>
        <p className="lead">A club aimed at Year 3 to 6, or ages 7 - 11 years old. Giving the children a safe place to have fun and to develop.</p>
        <p className="lead">Most of the kids are from Winnall, but kids from other areas are welcome too. Parents must drop off and collect kids.</p>
        <hr />
        <h2>People</h2>
        <PersonItem heading="Chris Mar&eacute;" job="Youth Leader" src={chris}>
            Husband, father, software architect, youth leader. Chris has 5 kids of his own and is passionate about
            children. He has been a helper and leader at WJYC since 2014.
        </PersonItem>
        <hr />
        <PersonItem heading="Phil Dalziel" job="Youth Leader" src={person}>
            Photographer, nature lover.
        </PersonItem>
        <hr />
        <PersonItem heading="Richard Burningham" job="Chairman" src={person}>
            Retired vicar.
        </PersonItem>
        <hr />
        <PersonItem heading="Alan Brewer" job="Safeguarding Officer" src={person}>
            Retired carpenter and school caretaker.
        </PersonItem>
    </div>
);

export default About;