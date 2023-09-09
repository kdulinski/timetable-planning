const TimetableFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(
      event.target.value,
      props.teachers.includes(event.target.value)
    );
  };

  return (
    <>
      <select onChange={filterChangeHandler} value={props.selected}>
        <optgroup label="Groups">
          {props.groups.map((group) => {
            return (
              <option key={group} value={group}>
                {group}
              </option>
            );
          })}
        </optgroup>
        <optgroup label="Teachers">
          {props.teachers.map((teacher) => {
            return (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            );
          })}
        </optgroup>
      </select>
    </>
  );
};

export default TimetableFilter;
