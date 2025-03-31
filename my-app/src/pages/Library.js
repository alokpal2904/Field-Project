import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";
import { reserveBook } from "../services/api";

function Library() {
    const [showForm, setShowForm] = useState(false);
    const [submitResult, setSubmitResult] = useState({ success: false, message: "" });
    const [showResult, setShowResult] = useState(false);

    const handleFormSubmit = async (formData) => {
        try {
            // Send data to backend
            await reserveBook(formData);
            setSubmitResult({
                success: true,
                message: "Book reserved successfully!"
            });
            setShowResult(true);
            // Hide result message after 5 seconds
            setTimeout(() => setShowResult(false), 5000);
            return true;
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "Failed to reserve book. Please try again."
            });
            setShowResult(true);
            // Hide error message after 5 seconds
            setTimeout(() => setShowResult(false), 5000);
            return false;
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Library &amp; Book Bank</title>
  
  {/* Result Notification */}
  {showResult && (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-md z-50 ${submitResult.success ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
        <p>{submitResult.message}</p>
    </div>
  )}
  
  {/* Navbar */}
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-0 py-0 w-full sticky top-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="flex items-center gap-2 text-[#0d151c] pl-0">
              <div className="size-16">
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 118 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <rect
                    y="-2.5"
                    width="117.157"
                    height={129}
                    fill="url(#pattern0_141_18)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_141_18"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_141_18"
                        transform="scale(0.00361011 0.00327869)"
                      />
                    </pattern>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#0d151c] text-base font-bold leading-tight tracking-[-0.015em] m-0 p-0">
                Sindhu Youth Circle
              </h2>
            </div>
            <div className="flex items-center gap-12 pr-[38px]">
              <Link to="/" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Home
              </Link>
              <Link to="/about" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                About
              </Link>
              <Link to="/activities" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Activities
              </Link>
              <Link to="/gymkhana" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Gymkhana
              </Link>
              <Link to="/events" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Events
              </Link>
              <Link to="/library" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Library
              </Link>
              <Link to="/contact" className="text-[#0d151c] text-base font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Contact
              </Link>
            </div>
          </header>
  {/* Hero Section */}
  <section
    className="relative text-white text-center py-20 bg-cover bg-center"
    style={{ backgroundImage: 'url("library.jpg")' }}
  >
    <div className="bg-black bg-opacity-50 py-16">
      <h1 className="text-4xl font-bold">Library &amp; Book Bank</h1>
      <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg">
        Reserve a book
      </button>
    </div>
  </section>
  {/* Library Information */}
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-2xl font-semibold">
      Lekhraj Aziz Library &amp; Research Centre
    </h2>
    <p className="text-gray-700">
      The Lekhraj Aziz Library &amp; Research Centre has over 33,000 Sindhi
      books, the largest collection in the world...
    </p>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <img src="library1.jpg" alt="Library" className="rounded-lg" />
      <img src="shelves1.jpg" alt="Book Shelves" className="rounded-lg" />
      <img src="shelves2.jpg" alt="Book Shelves" className="rounded-lg" />
    </div>
    <button className="mt-4 bg-gray-300 px-6 py-2 rounded-lg">
      Reserve a book
    </button>
  </div>
  {/* Book Bank Information */}
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-2xl font-semibold">
      Suman Ramesh Tulsiani &amp; Sunder Shewak Sabha Book Bank
    </h2>
    <p className="text-gray-700">
      Provides free textbooks from Class 8 to post-graduation.
    </p>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <img src="bookbank1.jpg" alt="Book Bank" className="rounded-lg" />
      <img src="books1.jpg" alt="Books" className="rounded-lg" />
      <img src="books2.jpg" alt="Books" className="rounded-lg" />
    </div>
    <button 
      className="mt-4 bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
      onClick={toggleForm}
    >
      Reserve a book
    </button>
  </div>

  {/* Book Reservation Form Modal */}
  {showForm && <BookForm onClose={toggleForm} onSubmit={handleFormSubmit} />}

  {/* Availability Section */}
  <div className="text-center  py-6 mt-6">
    <h3 className="text-lg font-semibold">Availability</h3>
    <p>Every Sunday 10am - 1pm.</p>
  </div>
  {/* Footer */}
  <footer className="text-center py-4 bg-white shadow-md">
    <p>
      © 2025 <span className="font-semibold">Sindhu Youth Circle</span>. All
      rights reserved.
    </p>
  </footer>
</>

    )
}

export default Library;