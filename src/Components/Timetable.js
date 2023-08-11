import "./Timetable.css";
import TimetableFilter from "./TimetableFilter";
import TimetableHour from "./TimetableHour";

const Timetable = (props) => {
  return (
    <table>
      <caption>
        <TimetableFilter groups={props.groups} teachers={props.teachers} />
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
          return <TimetableHour key={hour.id} id={hour.id} hour={hour.hours} />;
        })}
      </tbody>
    </table>
  );
};

export default Timetable;
