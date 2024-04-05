import DatePosted from "./Date-Posted/DatePosted";
import EmploymentsTypes from "./Employments-Types/EmploymentsTypes";
import JobRequirements from "./Job-Requirements/Job-Requirements";
import RemoteJobsOnly from "./Remote-Jobs-Only/RemoteJobsOnly";

export default function OptionalParameters() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly w-full text-sm lg:text-lg llg:text-base px-4 ssm:px-4 gap-3 ssm:gap-4 ">
      <DatePosted />
      <EmploymentsTypes />
      <JobRequirements />
      <RemoteJobsOnly />
    </section>
  );
}
