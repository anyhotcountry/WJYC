import React from "react";
import flyer from '../img/flyer.jpg';
import ImageItem from '../components/ImageItem';
import VideoItem from '../components/VideoItem';

const Home = () => (
    <div>
        <ImageItem heading="Spring Term" src={flyer}>
            The evenings are getting lighter which means that Spring is around the corner. Admission normally costs 50p per session, but we are continuing our promotion where you and your friend get in for free, if you bring a friend who has not been to youth club for at least 4 weeks.
        </ImageItem>
        <hr />
        <VideoItem heading="DIY Fidget Spinners" left src="https://www.youtube.com/embed/mRJd4o59Sms?rel=0&amp;controls=0">
            Here is an example of the things we get up to at WJYC. We made these fidget spinners.
        </VideoItem>
        <hr />
        <VideoItem heading="WJYC is the place to be!" src="https://www.youtube.com/embed/vadE1Z-AQnU?rel=0&amp;controls=0">
            Check out our rap song performed here by one of our kids. Come to youth club and show us your rapping skills.
        </VideoItem>
    </div>
);

export default Home;
