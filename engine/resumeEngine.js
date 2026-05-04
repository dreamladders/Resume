function buildResume(text) {

  const job = detectJob(text);

  let summary = `Professional candidate for ${job.role}.`;

  return {
    role: job.role,
    summary,
    skills: job.skills,
    atsScore: calculateATS(job),
    careerScore: calculateCareerScore(job)
  };
}
