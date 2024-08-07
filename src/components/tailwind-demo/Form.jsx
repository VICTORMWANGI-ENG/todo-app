import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  return (
    
      <form className="flex w-fit flex-col items-center gap-8 border-2 p-8">
        <InputField id={"first_name"} label={"First Name"} />
        <InputField id="second_name" label={"Second Name"} />
        <InputField id="username" label={"UserName"} />
        <InputField id="mentor" label={"Mentor"} />
        <InputField id="class" label={"Class"} />
        <Button label={"Add Student"} />
      </form>
    
  );
};

export default Form;
