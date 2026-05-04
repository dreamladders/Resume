function saveResume(resume) {
  let data = JSON.parse(localStorage.getItem("resumes") || "[]");
  data.push(resume);
  localStorage.setItem("resumes", JSON.stringify(data));
}
