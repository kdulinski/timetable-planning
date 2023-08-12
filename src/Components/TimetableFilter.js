const TimetableFilter = (props) => {
  const filterChangeHandler = (event) => {
    // let avalue = props.teachers.includes(event.target.value);
    // console.log(avalue);
    props.onFilterChange(
      event.target.value,
      props.teachers.includes(event.target.value)
    );
  };

  return (
    <div>
      <select onChange={filterChangeHandler} value={props.selected}>
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
