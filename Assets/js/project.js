function submitData(event) {
  event.preventDefault();

  // Mengambil data dari formulir
  const projectName = document.getElementById("input-project").value;
  const startDate = document.getElementById("input-start").value;
  const endDate = document.getElementById("input-end").value;
  const description = document.getElementById("input-description").value;

  // Mengambil teknologi yang dipilih
  const technologies = Array.from(
    document.querySelectorAll('.checkbox-grid input[type="checkbox"]')
  )
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.nextElementSibling.textContent);

  // Mengambil file gambar
  const imageFile = document.getElementById("input-image").files[0];

  console.log("Project Name:", projectName);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  console.log("Description:", description);
  console.log("Technologies:", technologies);

  if (imageFile) {
    console.log("Image File:", imageFile.name);
  }
}
