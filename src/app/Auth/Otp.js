'use client'
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function OTPVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // A custom function to verify the OTP with the backend server
  // You can use any library or method to make the request, such as axios, fetch, etc.
  // You can also handle the response and error from the server as you wish
  const verifyOTP = (otp) => {
    // Replace this with your own logic
    console.log(`Verifying OTP: ${otp}`);
  };

  // A function to handle the form submission
  const onSubmit = (data) => {
    // Get the OTP from the data object
    const otp = Object.values(data).join("");
    // Call the custom function to verify the OTP
    verifyOTP(otp);
  };

  // A state variable to store the remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(60);

  // A state variable to store the timer ID
  const [timerId, setTimerId] = useState(null);

  // A useEffect hook to create and clear the timer
  useEffect(() => {
    // Create a timer that will update the time left every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    // Store the timer ID in the state
    setTimerId(timer);
    // Clear the timer when the component unmounts or the time is up
    return () => {
      clearInterval(timer);
    };
  }, []);

  // A function to format the time left in mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="/images/logo.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Please Verify Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the six digit code we sent to your phone or email to verify
            your account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-py mb-py px-14 ">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                id={`otp-input-${i}`}
                type="text"
                maxLength="1"
                name={`input${i}`}
                value=""
                className="w-10 h-10 border rounded-md p-2 m-1 text-center text-xl font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                {...register(`input${i}`, {
                  required: true,
                  maxLength: 1,
                })}
                disabled={timeLeft === 0}
              />
            ))}
          </div>

          {/* Other form elements can go here */}

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              disabled={timeLeft === 0}
            >
              Verify
            </button>
          </div>
          {/* Countdown timer */}
          <div className="flex items-center justify-center mt-4">
            <p className="text-sm text-gray-600">
              Time left: {formatTime(timeLeft)}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
