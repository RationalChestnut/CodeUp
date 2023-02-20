import event from "../assets/event.jpeg";
import python_event_0 from "../assets/python-turtle-1/python_event_0.jpg";
import python_event_1 from "../assets/python-turtle-1/python_event_1.jpg";
import python_event_2 from "../assets/python-turtle-1/python_event_2.jpg";

import codeorg_1 from "../assets/codeorg-1/codeorg_1.jpg";

import p5_1 from "../assets/p5-1/p5_1.png";
import p5_2 from "../assets/p5-1/p5_2.png";
import p5_3 from "../assets/p5-1/p5_3.png";
import p5_4 from "../assets/p5-1/p5_4.png";

const events = [
  {
    id: 0,
    title: "Learn Python using Turtle",
    description:
      "In this 3 hour bootcamp, middle schoolers will learn the basics of Python with an interactive Python module called Turtle! There will be other activities throughout the event as we know sitting down for three hours can be nearly impossible!",
    when: "Saturday, March 4th from 1-4pm",
    where: "Cabin John Middle School",
    cost: 0,
    signupLink: "https://forms.gle/eVVRMBdtzwjpQCv77",
    startTime: new Date(2023, 2, 4, 13),
    endTime: new Date(2023, 2, 4, 16),
    images: [event],
  },
  {
    id: 1,
    title: "Learn JavaScript with p5.JS",
    description:
      "In this 3 hour bootcamp, middle schoolers will learn the basics of Python with an interactive Python module called Turtle! There will be other activities throughout the event as we know sitting down for three hours can be nearly impossible!",
    when: "Saturday, December 10th from 1-4pm",
    where: "Pyle Middle School",
    cost: 0,
    signupLink: "https://forms.gle/bsKTpkpZG8J1FxgT6",
    startTime: new Date(2022, 11, 11, 13),
    endTime: new Date(2022, 11, 11, 16),
    images: [p5_1, p5_2, p5_3, p5_4],
  },
  {
    id: 2,
    title: "Learn JavaScript with Code.org's App Lab",
    description:
      "In this 3 hour bootcamp, middle schoolers will learn the basics of Python with an interactive Python module called Turtle! There will be other activities throughout the event as we know sitting down for three hours can be nearly impossible!",
    when: "Saturday, December 10th from 1-4pm",
    where: "Pyle Middle School",
    cost: 0,
    signupLink: "https://forms.gle/bsKTpkpZG8J1FxgT6",
    startTime: new Date(2022, 11, 11, 13),
    endTime: new Date(2022, 11, 11, 16),
    images: [codeorg_1],
  },
  {
    id: 3,
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
