const TimetableLesson = (props) => {
  const lessonClickHandler = () => {
    props.onLessonClick(props.day, props.hour);
  };

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

  return <td onClick={lessonClickHandler}>{content}</td>;
};

export default TimetableLesson;
