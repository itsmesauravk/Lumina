"use client"

import NavbarProvider from "@/app/components/provider/Navbar"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import courses from "@/data/courses.json"
import ActionCard from "@/app/components/provider/ActionCard"

import { FaPlus } from "react-icons/fa6"
import Link from "next/link"

interface Course {
  id: number
  title: string
  category: string
  categoryId: number
  image: string
  price: number
  likes: number
  rating: number
  instructor: string
  description: string
  duration: string
  slug: string
  registered_users: number[]
  course_views: number
  course_level: string
  provider: string
  providerId: number
  topics: { id: number; name: string; description: string }[]
  learning_outcomes: string[]
}

const Courses: React.FC = () => {
  const { pid } = useParams()
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])

  useEffect(() => {
    if (pid) {
      const filteredCourse = courses.filter(
        (course) => course.providerId === Number(pid)
      )
      setFilteredCourses(filteredCourse)
    }
  }, [pid])

  return (
    <div>
      <NavbarProvider />
      <div className="flex flex-col mx-auto px-4 lg:px-40 mt-8 space-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-extrabold text-center lg:text-left text-gray-800">
            Courses
          </h1>
          <div className="flex  gap-2">
            <Link
              href={`/provider/${pid}/courses/add-course`}
              className="flex gap-2 bg-purple-200 p-2 w-36 rounded-md hover:bg-purple-300"
            >
              <FaPlus className="h-6 w-5" />
              <p className="text-center text-black">Add Course</p>
            </Link>
            <Link
              href={`/provider/${pid}/courses/add-topic`}
              className="flex gap-2 bg-purple-200 p-2 w-36 rounded-md hover:bg-purple-300"
            >
              <FaPlus className="h-6 w-6" />
              <p className="text-center text-black">Add Topic</p>
            </Link>
            <Link
              href={`/provider/${pid}/courses/add-video`}
              className="flex gap-2 bg-purple-200 p-2 w-36 rounded-md hover:bg-purple-300"
            >
              <FaPlus className="h-6 w-6" />
              <p className="text-center text-black">Add Video</p>
            </Link>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <ActionCard
                key={course.id}
                courseDetail={course}
                providerId={Number(pid)}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No courses available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses
