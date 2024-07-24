const jobs = [
  "Your profession",
  "Doctor",
  "Engineer",
  "Teacher",
  "Lawyer",
  "Accountant",
  "Architect",
  "Pharmacist",
];

const Select = ({ job, setJob }) => {
  return (
    <select
      className="h-14 text-base pl-4 rounded-[5px] border-none bg-[#e6f1f1] text-[#4e7777] mb-[1.4rem] focus:outline-1 focus:outline-[#6264fd] focus:outline-offset-0"
      id="job"
      value={job}
      onChange={(e) => setJob(e.target.value)}
    >
      {jobs.map((job) => (
        <option value={job} key={job}>
          {job}
        </option>
      ))}
    </select>
  );
};

export default Select;
