import Timetable from "./Components/Timetable";

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

function App() {
  return (
    <div>
      <Timetable
        classHours={classHoursDummy}
        groups={groups}
        teachers={teachers}
      />
    </div>
  );
}

export default App;
