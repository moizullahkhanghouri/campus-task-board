function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-number">
        #{String(task.id).padStart(2, "0")}
      </div>

      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.category}</p>
      </div>

      <div className="task-status">Pending</div>
    </div>
  );
}

export default TaskCard;