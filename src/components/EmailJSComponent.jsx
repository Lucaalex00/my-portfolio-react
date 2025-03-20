import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const EmailJSComponent = () => {
  const [isConfirmed, setIsConfirmed] = useState(false); // Confirmation state
  const [confirmationCode, setConfirmationCode] = useState(''); // Generated confirmation code
  const [userCode, setUserCode] = useState(''); // Code entered by the user
  const [message, setMessage] = useState(''); // Feedback message
  const [userEmail, setUserEmail] = useState(''); // Store user's email
  const [userName, setUserName] = useState(''); // Store user's name
  const [count, setCount] = useState(0); // Count to manage the confirmation state
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Button disabled state
  const form = useRef(); // Ref for the message form

  // Function to send the confirmation email
  const sendConfirmationEmail = (e) => {
    e.preventDefault();

    // Generate a confirmation code
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setConfirmationCode(generatedCode);

    // Store the user's email and name
    setUserEmail(e.target.user_email.value);
    setUserName(e.target.from_name.value);

    const templateParams = {
      from_name: e.target.from_name.value,
      user_email: e.target.user_email.value,
      confirmation_code: generatedCode, // Include the confirmation code
    };

    emailjs.send('service_6lwbh8d', 'template_j4ucpnr', templateParams, 'vYzCrWSpVoegMPEj7')
      .then(() => {
        setMessage('A confirmation email has been sent. Please check your inbox and enter the code to confirm.');
      })
      .catch(() => {
        setMessage('Failed to send confirmation email');
      });

    e.target.reset(); // Reset the form after sending confirmation
  };

  // Function to verify the confirmation code entered by the user
  const verifyConfirmationCode = () => {
    if (userCode === confirmationCode && userCode.length !== 0) {
      setIsConfirmed(true);
      setMessage('Email confirmed successfully! Now you can send your message.');
    } else {
      setMessage('Incorrect confirmation code. Please try again.');
    }
  };

  // Function to send the final message after confirmation
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isConfirmed) {
      setMessage('Please confirm your email first.');
      return;
    }

    const currentDate = new Date().toLocaleString(); // Get the current date and time
    const templateParams = {
      from_name: userName, // Use the stored name
      user_email: userEmail, // Use the stored email
      message: form.current.message.value,
      date: currentDate, // Include the current date and time
    };

    setCount(1); // Set count to 1 to disable the textarea and button
    setIsButtonDisabled(true); // Disable the button
    emailjs.send('service_6lwbh8d', 'template_t5booah', templateParams, 'vYzCrWSpVoegMPEj7')
      .then((result) => {
        console.log(result.text);
        setMessage('Your message has been sent successfully!');

        setTimeout(() => window.location.reload(), 3000); // Redirect to home page after 3 seconds
      })
      .catch((error) => {
        console.log(error.text);
        setMessage('Failed to send your message.');
      });

    e.target.reset();
  };

  return (
    <div className="w-1/2 mx-auto">
      {!isConfirmed ? (
        <form onSubmit={sendConfirmationEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full z-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Confirmation Email
          </button>
        </form>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              rows="4"
              required
              disabled={count === 1 || isButtonDisabled} // Disable the textarea if count is 1 or button is disabled
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isButtonDisabled} // Disable the button if it is disabled
          >
            Send Message
          </button>
        </form>
      )}

      {!isConfirmed && (
        <div className="mt-4">
          <label className="block text-gray-700">Confirmation Code</label>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the confirmation code"
            required
          />
          <button
            onClick={verifyConfirmationCode}
            className="w-full bg-green-500 cursor-pointer text-white p-2 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
          >
            Verify Code
          </button>
        </div>
      )}

      {message && (
        <p className={`mt-4 text-lg font-semibold ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailJSComponent;
