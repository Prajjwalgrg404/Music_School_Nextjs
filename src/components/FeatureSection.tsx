"use client";
import Link from "next/link";
import Coursedata from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeatureSection() {
  const Featuredcards = Coursedata.courses.filter(
    (course: Course) => course.isFeatured === false
  );

  return (
    <div className="w-full h-screen bg-gray-950 my-10 text-center">
      <div>
        <div>
          <h2 className="uppercase text-teal-600 font-semibold tracking-wide">
            Featured courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center py-10 px-8">
        {Featuredcards.map((course: Course) => (
          <div key={course.id}>
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-lg">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`} className="py-2 px-6 bg-teal-800 mt-4 rounded-xl hover:bg-teal-950">Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center ">
        <Link
          href={"/courses"}
          className="bg-teal-900 py-4 px-8 rounded-xl hover:bg-teal-700"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
}

export default FeatureSection;
