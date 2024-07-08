import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-md">
        {/* Left Side - Sign-up Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6 bg-white rounded-l-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create an Account
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="justify-between items-center">
              <Button
                type="submit"
                className="flex items-center w-full mt-2 py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-600">
              Already have an account?
            </span>
            <a href="/login" className="text-sm text-blue-600 hover:underline">
              Log In
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button className="flex items-center w-full py-2 px-4 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Sign Up with Google
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Register Image"
            className="object-cover w-full h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage