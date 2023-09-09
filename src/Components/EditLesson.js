import "./EditLesson.css";
import { useState, useEffect } from "react";

const EditLesson = (props) => {
  const [selectedSubject, setSelectedSubject] = useState(
    props.subjects[0].name
  );
  const [error, setError] = useState();

  useEffect(() => {
    for (const lesson of props.lessons) {
      if (
        lesson.day === props.currentLesson.day &&
        lesson.hour === props.currentLesson.hour
      ) {
        if (lesson.teacher === props.currentLesson.teacher) {
          setError("The selected teacher is already assigned.");
          break;
        }
        if (lesson.group === props.currentLesson.group) {
          setError("The selected group is already assigned.");
          break;
        }
        if (lesson.classroom === props.currentLesson.classroom) {
          setError("The selected classroom is already assigned.");
          break;
        }
      }
      setError(null);
    }
  }, [props.currentLesson]);

  const subjectChangeHandler = (event) => {
    setSelectedSubject(event.target.value);
    const currentSubject = props.subjects.filter(
      (subject) => subject.name == event.target.value
    );
    props.setCurrentLesson({
      ...props.currentLesson,
      subject: event.target.value,
      teacher: currentSubject[0].teachers[0],
      classroom: currentSubject[0].classrooms[0],
    });
    console.log(selectedSubject);
  };

  const teacherChangeHandler = (event) => {
    props.setCurrentLesson({
      ...props.currentLesson,
      teacher: event.target.value,
    });
  };

  const groupChangeHandler = (event) => {
    props.setCurrentLesson({
      ...props.currentLesson,
      group: event.target.value,
    });
  };

  const classroomChangeHandler = (event) => {
    props.setCurrentLesson({
      ...props.currentLesson,
      classroom: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddLesson(props.currentLesson);
    props.onModalClose();
  };

  let filteredSubjects = props.subjects.filter(
    (subject) => subject.name === selectedSubject
  );

  return (
    <div className="edit-lesson__modal">
      <div className="edit-lesson__content">
        {error}
        <form onSubmit={submitHandler}>
          <div className="edit-lesson__controls">
            <div className="edit-lesson__control">
              <label>subject</label>
              {props.isTeacher ? (
                <select onChange={subjectChangeHandler}>
                  {props.subjects
                    .filter((subject) =>
                      subject.teachers.includes(props.currentLesson.teacher)
                    )
                    .map((subject) => (
                      <option key={subject.name} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                </select>
              ) : (
                <select onChange={subjectChangeHandler}>
                  {props.subjects.map((subject) => (
                    <option key={subject.name} value={subject.name}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {props.isTeacher ? (
              <div className="edit-lesson__control">
                <label>group</label>
                <select onChange={groupChangeHandler}>
                  {props.groups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
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
            )}
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
            <button type="button" onClick={props.onDeleteLesson}>
              Delete
            </button>
            <button type="submit">Ok</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLesson;
