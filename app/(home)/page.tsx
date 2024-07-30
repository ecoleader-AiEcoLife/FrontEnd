"use client";

import News from "@/components/news/News";
import Search from "@/components/search/Search";
import Swipers from "@/components/slider/Swipers";
import AddTodoForm from "@/components/todo/AddTodoForm";
import ToDoList from "@/components/todo/ToDoList";

export default function Page() {
  return (
    <div className="">
      <div>
        <div>
          <Search />
          <Swipers />
        </div>
        <AddTodoForm />
        <ToDoList />
      </div>

      <News />
    </div>
  );
}
