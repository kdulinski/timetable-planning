import { useDebugValue } from "react";

const TimetableLesson = (props) => {
  let content;

  let curentLesson;

  if (props.isSelectedTeacher) {
    curentLesson = props.lessons.filter(
      (lesson) =>
        lesson.teacher === props.selected &&
        lesson.day === props.day &&
        lesson.hour === props.hour
    );
  } else {
    curentLesson = props.lessons.filter(
      (lesson) =>
        lesson.group === props.selected &&
        lesson.day === props.day &&
        lesson.hour === props.hour
    );
  }

  //   curentLesson[0] !== undefined
  //     ? (content =
  //         curentLesson[0].subject +
  //         " / " +
  //         curentLesson[0].teacher +
  //         " / " +
  //         curentLesson[0].classroom)
  //     : (content = "");

  if (curentLesson[0] !== undefined && props.isSelectedTeacher) {
    content =
      curentLesson[0].subject +
      " / " +
      curentLesson[0].group +
      " / " +
      curentLesson[0].classroom;
  } else if (curentLesson[0] !== undefined) {
    content =
      curentLesson[0].subject +
      " / " +
      curentLesson[0].teacher +
      " / " +
      curentLesson[0].classroom;
  } else {
    content = "";
  }

  return <td>{content}</td>;
};

//{
//     day: "mon",
//     hour: 1,
//     group: "1a",
//     subject: "mathematics",
//     teacher: "AN",
//     classroom: 1,
//   },
export default TimetableLesson;
