/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

const SingleTodoItem = ({ todo }) => {
  return (
    <div className="todo">
      <div className="flex items-center justify-between border-2 border-[#685254]">
        <Checkbox />
        <p>{todo.title}</p>
        <div className="flex-container">
         <PrimaryButton>Edit</PrimaryButton>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodoItem;
