import event from "../assets/event.jpeg";
import python_event_0 from "../assets/python_event_0.jpg";
import python_event_1 from "../assets/python_event_1.jpg";
import python_event_2 from "../assets/python_event_2.jpg";

const events = [
  {
    id: 0,
    title: "Learn JavaScript with Code.org's App Lab",
    description:
      "In this 3 hour bootcamp, middle schoolers will learn the basics of Python with an interactive Python module called Turtle! There will be other activities throughout the event as we know sitting down for three hours can be nearly impossible!",
    when: "Saturday, December 10th from 1-4pm",
    where: "Pyle Middle School",
    cost: 0,
    signupLink: "https://forms.gle/bsKTpkpZG8J1FxgT6",
    startTime: new Date(2022, 11, 11, 13),
    endTime: new Date(2022, 11, 11, 16),
    images: [event],
  },
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
    images: [python_event_0, python_event_1, python_event_2],
  },
];

export default events;
