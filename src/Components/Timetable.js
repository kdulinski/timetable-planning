import "./Timetable.css";
import TimetableFilter from "./TimetableFilter";
import TimetableHour from "./TimetableHour";
import { useState } from "react";

const Timetable = (props) => {
  let [filterValue, setFilterValue] = useState(props.groups[0]);
  let [isTeacher, setIsTeacher] = useState(false);

  const FilterChangeHandler = (selectedValue, isSelectedTeacher) => {
    setFilterValue(selectedValue);
    setIsTeacher(isSelectedTeacher);
  };

  return (
    <table>
      <caption>
        <TimetableFilter
          groups={props.groups}
          teachers={props.teachers}
          onFilterChange={FilterChangeHandler}
          selected={filterValue}
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
              selected={filterValue}
              isSelectedTeacher={isTeacher}
              onLessonClick={props.onLessonClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Timetable;
