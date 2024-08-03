"use client";

import News from "@/components/news/News";
import Search from "@/components/search/Search";
import Swipers from "@/components/slider/Swipers";
import AddTodoForm from "@/components/todo/AddTodoForm";
import TodoList from "@/components/todo/TodoList";

export default function Page() {
  return (
    <div className="">
      <div>
        <div>
          <Search />
          <Swipers />
        </div>
        <div className="max-w-3xl mx-auto bg-green-200 bg-opacity-60 shadow-lg rounded-lg mt-10">
          <h1 className="text-center font-bold text-[20px]">
            재활용품 장바구니
          </h1>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>

      <News />
    </div>
  );
}
