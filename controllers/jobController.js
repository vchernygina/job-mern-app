import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const job = await Job.find({});
  res.status(200).json({ job });
};

export const createJobs = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

export const getSingleJobs = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res.status(404).json({ msg: `no job with ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updateJob) {
    return res.status(404).json({ msg: `no job with id! ${id}` });
  }

  res.status(200).json({ msg: `job modified`, job: updateJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  console.log(removedJob);
  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ msg: `job deleted`, job: removedJob });
};
