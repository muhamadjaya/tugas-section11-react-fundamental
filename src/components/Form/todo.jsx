import Style from "./style.module.css";

function Todo() {
  const activities = [
    { id: 1, title: "Membuat Komponen", complete: true },
    { id: 2, title: "Unit Testing", complete: false },
    { id: 3, title: "Setup Development Environment", complete: true },
    { id: 4, title: "Deploy ke server", complete: false },
  ];

  return (
    <div>
      <div className={Style.Navbar}>To Do App</div>
      <ul>
        {activities.map((act) => (
          <li
            key={act.id}
            className={`${Style.act} ${act.complete && Style.true}`}
          >
            {act.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
