function calculateCareerScore(job) {

  let score = 40;

  if (job.skills.length > 2) score += 20;
  if (job.role) score += 20;

  return Math.min(score, 100);
}
