"use client";

import News from "@/components/news/News";
import Search from "@/components/search/Search";
import Swipers from "@/components/slider/Swipers";
import AddTodoForm from "@/components/todo/AddTodoForm";
import TodoList from "@/components/todo/TodoList";

export default function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <Search />
          <div className="mt-4 sm:mt-6">
            <Swipers />
          </div>
        </div>
        <div className="bg-green-200 bg-opacity-60 shadow-lg rounded-lg mt-6 p-4 sm:p-6 lg:p-8">
          <h1 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
            재활용품 장바구니
          </h1>
          <AddTodoForm />
          <div className="mt-4 sm:mt-6">
            <TodoList />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <News />
      </div>
    </div>
  );
}
