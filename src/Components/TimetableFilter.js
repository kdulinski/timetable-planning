const TimetableFilter = (props) => {
  return (
    <div>
      <select>
        <optgroup label="Groups">
          {props.groups.map((group) => {
            return <option key={group}>{group}</option>;
          })}
        </optgroup>
        <optgroup label="Teachers">
          {props.teachers.map((teacher) => {
            return <option key={teacher}>{teacher}</option>;
          })}
        </optgroup>
      </select>
    </div>
  );
};

export default TimetableFilter;
