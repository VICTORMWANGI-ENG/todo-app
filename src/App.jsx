import Form from "./components/tailwind-demo/Form";
import AddToDoForm from "./components/AddToDoForm";
import PageTitle from "./components/PageTitle";
import TodoContainer from "./components/TodosContainer";

const App = () => {
  return (
    <main>
      <button className="min-w-[120px] rounded-lg border-0 px-[17px] py-[12px] shadow-inner bg-[var(--primary-color)] text-[var(--secondary-color)] transition-all duration-1000 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
        Kill todo
      </button>
      <PageTitle>MY TODO APP</PageTitle>
      <AddToDoForm />
      <TodoContainer />
      <Form />
    </main>
  );
};

export default App;
