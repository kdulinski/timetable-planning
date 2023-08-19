import "./EditLesson.css";
import { useState } from "react";

const EditLesson = (props) => {
  const [selectedSubject, setSelectedSubject] = useState(
    props.subjects[0].name
  );

  const [userInput, setUserInput] = useState({
    day: props.currentLesson.day,
    hour: props.currentLesson.hour,
    group: props.currentLesson.group,
  });

  const subjectChangeHandler = (event) => {
    setSelectedSubject(event.target.value);
    setUserInput({ ...userInput, subject: event.target.value });
  };

  const teacherChangeHandler = (event) => {
    setUserInput({ ...userInput, teacher: event.target.value });
  };

  const classroomChangeHandler = (event) => {
    setUserInput({ ...userInput, classroom: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddLesson(userInput);
    props.onModalClose();
  };

  let filteredSubjects = props.subjects.filter(
    (subject) => subject.name === selectedSubject
  );

  return (
    <div className="edit-lesson__modal">
      <div className="edit-lesson__content">
        <form onSubmit={submitHandler}>
          <div className="edit-lesson__controls">
            <div className="edit-lesson__control">
              <label>subject</label>
              <select onChange={subjectChangeHandler}>
                {props.subjects.map((subject) => (
                  <option key={subject.name} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="edit-lesson__control">
              <label>teacher</label>
              <select onChange={teacherChangeHandler}>
                {filteredSubjects[0].teachers.map((teacher) => (
                  <option key={teacher} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            </div>
            <div className="edit-lesson__control">
              <label>classroom</label>
              <select onChange={classroomChangeHandler}>
                {filteredSubjects[0].classrooms.map((classroom) => (
                  <option key={classroom} value={classroom}>
                    {classroom}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="edit-lesson__actions">
            <button type="button" onClick={props.onModalClose}>
              Cancel
            </button>
            <button type="button">Delete</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLesson;
