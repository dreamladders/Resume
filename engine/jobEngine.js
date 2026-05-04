function detectJob(text) {
  text = text.toLowerCase();

  if (text.includes("java") || text.includes("python")) {
    return { role: "Software Developer", skills: ["coding", "debugging", "api"] };
  }

  if (text.includes("hotel")) {
    return { role: "Hotel Staff", skills: ["customer service", "communication"] };
  }

  if (text.includes("data entry")) {
    return { role: "Data Entry Operator", skills: ["typing", "excel", "accuracy"] };
  }

  return { role: "General Worker", skills: ["adaptability", "basic communication"] };
}
