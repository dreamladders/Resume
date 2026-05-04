function downloadPDF() {
  const element = document.getElementById("output");

  html2pdf().from(element).set({
    margin: 1,
    filename: "dream-ladders-resume.pdf",
    html2canvas: { scale: 2 }
  }).save();
}
