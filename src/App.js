import Timetable from "./Components/Timetable";
import EditLesson from "./Components/EditLesson";
import { useState } from "react";

const groupsDummy = [
  {
    name: "1a",
    subjects: {
      mathematics: {
        teacher: "AN",
        quantity: 5,
      },
      history: {
        teacher: "MJ",
        quantity: 3,
      },
      music: {
        teacher: "AM",
        quantity: 2,
      },
      physicalEducation: {
        teacher: "TW",
        quantity: 3,
      },
      computerScience: {
        teacher: "TK",
        quantity: 4,
      },
    },
    tutor: "AN",
  },
  {
    name: "1b",
    subjects: {
      mathematics: {
        teacher: "AN",
        quantity: 3,
      },
      history: {
        teacher: "MJ",
        quantity: 5,
      },
      music: {
        teacher: "AM",
        quantity: 3,
      },
      physicalEducation: {
        teacher: "TW",
        quantity: 3,
      },
      computerScience: {
        teacher: "TK",
        quantity: 2,
      },
    },
    tutor: "AN",
  },
];

const subjectsDummy = [
  { name: "mathematics", teachers: ["AN", "MW"], classrooms: [1, 11] },
  { name: "history", teachers: ["MJ"], classrooms: [2, 12] },
  { name: "music", teachers: ["AM"], classrooms: [3, 13] },
  { name: "physicalEducation", teachers: ["TW"], classrooms: [0] },
  { name: "computerScience", teachers: ["TK"], classrooms: [14] },
];

let teachers = [];
subjectsDummy.map((subject) => {
  let subjectTeachers = subject.teachers;
  teachers = [...teachers, ...subjectTeachers];
});

let groups = groupsDummy.map((group) => group.name);

const classHoursDummy = [
  { id: 1, hours: "8:00 - 8:45" },
  { id: 2, hours: "8:55 - 9:40" },
  { id: 3, hours: "9:50 - 10:35" },
  { id: 4, hours: "10:45 - 11:30" },
  { id: 5, hours: "11:40 - 12:25" },
  { id: 6, hours: "12:35 - 13:20" },
  { id: 7, hours: "13:30 - 14:15" },
];

const lessonsDummy = [
  {
    day: "mon",
    hour: 1,
    group: "1a",
    subject: "mathematics",
    teacher: "AN",
    classroom: 1,
  },
  {
    day: "mon",
    hour: 2,
    group: "1a",
    subject: "history",
    teacher: "MJ",
    classroom: 2,
  },
  {
    day: "wed",
    hour: 1,
    group: "1b",
    subject: "music",
    teacher: "AM",
    classroom: 3,
  },
  {
    day: "wed",
    hour: 2,
    group: "1b",
    subject: "mathematics",
    teacher: "AN",
    classroom: 3,
  },
];

function App() {
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [currentLesson, setCurrentLesson] = useState();
  const [lessons, setLessons] = useState(lessonsDummy);

  const lessonClickHandler = (day, hour) => {
    setIsEditVisible(true);
    setCurrentLesson({ day: day, hour: hour, group: "1a" });
  };

  const modalCloseHandler = () => {
    setIsEditVisible(false);
  };

  const addLessonHandler = (newLesson) => {
    setLessons((prevLessons) => {
      return [...prevLessons, newLesson];
    });
  };

  return (
    <div>
      <Timetable
        classHours={classHoursDummy}
        groups={groups}
        teachers={teachers}
        lessons={lessons}
        onLessonClick={lessonClickHandler}
      />
      {isEditVisible && (
        <EditLesson
          subjects={subjectsDummy}
          onModalClose={modalCloseHandler}
          currentLesson={currentLesson}
          onAddLesson={addLessonHandler}
        />
      )}
    </div>
  );
}

export default App;
