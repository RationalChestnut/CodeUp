import event from "../assets/event.jpeg";
import hook from "../assets/hook.png";

const events = [
    {
        id: 1,
        title: "Introduction to Python using Turtle",
        description:
            "In this 3 hour bootcamp, middle schoolers will learn the basics of Python with an interactive Python module called Turtle! There will be other activities throughout the event as we know sitting down for three hours can be nearly impossible!",
        when: "Sunday, November 6th from 1-4pm",
        where: "Pyle Middle School",
        cost: 0,
        signupLink: "https://forms.gle/vb6Ud5dUJ5Nj1u4d8",
        startTime: new Date(2022, 10, 6, 13),
        endTime: new Date(2022, 10, 6, 16),
        images: [event, event, event, event, hook],
    },
];

export default events;
