import TimetableLesson from "./TimetableLesson";

const TimetableHour = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.hour}</td>
      <TimetableLesson
        day="mon"
        hour={props.id}
        lessons={props.lessons}
        selected={props.selected}
        isSelectedTeacher={props.isSelectedTeacher}
        onLessonClick={props.onLessonClick}
      />
      <TimetableLesson
        day="tue"
        hour={props.id}
        lessons={props.lessons}
        selected={props.selected}
        isSelectedTeacher={props.isSelectedTeacher}
        onLessonClick={props.onLessonClick}
      />
      <TimetableLesson
        day="wed"
        hour={props.id}
        lessons={props.lessons}
        selected={props.selected}
        isSelectedTeacher={props.isSelectedTeacher}
        onLessonClick={props.onLessonClick}
      />
      <TimetableLesson
        day="thu"
        hour={props.id}
        lessons={props.lessons}
        selected={props.selected}
        isSelectedTeacher={props.isSelectedTeacher}
        onLessonClick={props.onLessonClick}
      />
      <TimetableLesson
        day="fri"
        hour={props.id}
        lessons={props.lessons}
        selected={props.selected}
        isSelectedTeacher={props.isSelectedTeacher}
        onLessonClick={props.onLessonClick}
      />
    </tr>
  );
};

export default TimetableHour;
