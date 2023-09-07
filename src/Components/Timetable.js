import "./Timetable.css";
import TimetableFilter from "./TimetableFilter";
import TimetableHour from "./TimetableHour";

const Timetable = (props) => {
  return (
    <table>
      <caption>
        <TimetableFilter
          groups={props.groups}
          teachers={props.teachers}
          onFilterChange={props.onFilterChange}
          selected={props.filterValue}
        />
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Class hours</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {props.classHours.map((hour) => {
          return (
            <TimetableHour
              key={hour.id}
              id={hour.id}
              hour={hour.hours}
              lessons={props.lessons}
              selected={props.filterValue}
              isSelectedTeacher={props.isTeacher}
              onLessonClick={props.onLessonClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Timetable;
