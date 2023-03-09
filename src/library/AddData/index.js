import { db } from "@/db";
export const addData = () => {
  const nameInputValue = document.getElementById("nameInput").value;
  const priorityValue = document.getElementById("priority").value;
  const statusValue = document.getElementById("status").value;
  const deadlineValue = document.getElementById("deadline").value;
  const detailValue = document.getElementById("detail").value;
  db.push({
    TaskName: nameInputValue,
    priority: priorityValue,
    status: statusValue,
    deadline: deadlineValue,
    detail: detailValue,
    id: Date.now(),
  });
  console.log(db);
  console.log(nameInputValue, priorityValue, statusValue, deadlineValue);
};
