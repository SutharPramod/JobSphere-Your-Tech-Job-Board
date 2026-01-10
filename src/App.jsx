import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search_Filter from "./components/Search_Filter";
import jobListings from "./data/jobs";
import Modal from "./components/Modal";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Toggle save/unsave
  const toggleSave = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };
  
   const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };
  
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      job.companyName.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || job.jobType.includes(filter);

    return matchesSearch && matchesFilter;
  });

  const savedJobList = jobListings.filter((job) => savedJobs.includes(job.id));

  return (
    <div className="min-h-screen bg-[#000000] px-6 py-10 text-white">
      <Header />

      {/* Search & Filter */}
      <Search_Filter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Saved Jobs Section */}
      {savedJobList.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-center">Saved Jobs</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10 border-t-2 ">
            {savedJobList.map((job) => (
              <Card
                key={job.id}
                {...job}
                savedJobs={savedJobs}
                toggleSave={toggleSave}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Jobs */}
      <h2 className="text-xl font-bold mb-4 text-center ">All Jobs</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10 border-t-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card
              key={job.id}
              {...job}
              savedJobs={savedJobs}
              toggleSave={toggleSave}
              onApply={() => openModal(job)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No jobs found</p>
        )}

      </div>
       {selectedJob && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          jobTitle={selectedJob.jobTitle}
          companyName={selectedJob.companyName}
        />
      )}

    </div>
  );
}

export default App;
