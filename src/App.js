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
  const [filterValue, setFilterValue] = useState(groups[0]);
  const [isTeacher, setIsTeacher] = useState(false);

  const FilterChangeHandler = (selectedValue, isSelectedTeacher) => {
    setFilterValue(selectedValue);
    setIsTeacher(isSelectedTeacher);
  };

  const lessonClickHandler = (day, hour) => {
    setIsEditVisible(true);
    isTeacher &&
      setCurrentLesson({
        day: day,
        hour: hour,
        teacher: filterValue,
        subject: subjectsDummy.filter((subject) =>
          subject.teachers.includes(filterValue)
        )[0].name,
        group: groups[0],
        classroom: subjectsDummy.filter((subject) =>
          subject.teachers.includes(filterValue)
        )[0].classrooms[0],
      });
    !isTeacher &&
      setCurrentLesson({
        day: day,
        hour: hour,
        group: filterValue,
        subject: subjectsDummy[0].name,
        teacher: teachers[0],
        classroom: subjectsDummy[0].classrooms[0],
      });
  };

  const modalCloseHandler = () => {
    setIsEditVisible(false);
  };

  const addLessonHandler = (newLesson) => {
    setLessons((prevLessons) => {
      return [...prevLessons, newLesson];
    });
  };

  const deleteLessonHandler = () => {
    let updatedLessons;
    if (isTeacher) {
      updatedLessons = lessons.filter(
        (lesson) =>
          lesson.day !== currentLesson.day ||
          lesson.hour !== currentLesson.hour ||
          lesson.teacher !== filterValue
      );
    }
    if (!isTeacher) {
      updatedLessons = lessons.filter(
        (lesson) =>
          lesson.day !== currentLesson.day ||
          lesson.hour !== currentLesson.hour ||
          lesson.group !== filterValue
      );
    }
    setLessons(updatedLessons);
    setIsEditVisible(false);
  };

  return (
    <div>
      <Timetable
        classHours={classHoursDummy}
        groups={groups}
        teachers={teachers}
        lessons={lessons}
        onLessonClick={lessonClickHandler}
        onFilterChange={FilterChangeHandler}
        filterValue={filterValue}
        isTeacher={isTeacher}
      />
      {isEditVisible && (
        <EditLesson
          subjects={subjectsDummy}
          onModalClose={modalCloseHandler}
          currentLesson={currentLesson}
          setCurrentLesson={setCurrentLesson}
          onAddLesson={addLessonHandler}
          onDeleteLesson={deleteLessonHandler}
          isTeacher={isTeacher}
          groups={groups}
          filterValue={filterValue}
          lessons={lessons}
        />
      )}
    </div>
  );
}

export default App;
