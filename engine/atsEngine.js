function calculateATS(job) {

  let score = 50;

  if (job.skills.length > 3) score += 20;
  if (job.role.includes("Developer")) score += 20;

  return Math.min(score, 100);
}
