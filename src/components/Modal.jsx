import { useState } from "react";

function Modal({ isOpen, onClose, jobTitle, companyName }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do real form logic here (API call) if needed
    setSubmitted(true); // Show success popup
  };

  const handleClose = () => {
    setSubmitted(false); // reset success message
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-[#1A1A1D] p-6 text-white">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-4">Apply for {jobTitle}</h2>
            <p className="mb-4 text-gray-300">at {companyName}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-[#2A2A2E] px-4 py-2 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl bg-[#2A2A2E] px-4 py-2 text-white outline-none"
              />
              <textarea
                placeholder="Cover Letter"
                required
                className="w-full rounded-xl bg-[#2A2A2E] px-4 py-2 text-white outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#A64D79] px-4 py-2 font-semibold hover:bg-[#6A1E55] transition"
              >
                Submit Application
              </button>
            </form>
          </>
        ) : (
          // ✅ Success Message
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-xl font-bold text-green-400 mb-2">Successfully Applied!</h2>
            <p className="mb-4 text-gray-300">Thank you for applying to {companyName}</p>
            <button
              onClick={handleClose}
              className="rounded-xl bg-[#A64D79] px-4 py-2 font-semibold hover:bg-[#6A1E55] transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
