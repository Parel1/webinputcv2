const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  address: document.getElementById("address"),
  summary: document.getElementById("summary"),
  education: document.getElementById("education"),
  experience: document.getElementById("experience"),
  skills: document.getElementById("skills"),
};

const preview = {
  name: document.getElementById("previewName"),
  email: document.getElementById("previewEmail"),
  phone: document.getElementById("previewPhone"),
  address: document.getElementById("previewAddress"),
  summary: document.getElementById("previewSummary"),
  education: document.getElementById("previewEducation"),
  experience: document.getElementById("previewExperience"),
  skills: document.getElementById("previewSkills"),
};

inputs.name.addEventListener("input", () => {
  preview.name.textContent =
    inputs.name.value || "Nama Lengkap";
});

inputs.email.addEventListener("input", () => {
  preview.email.textContent =
    inputs.email.value || "email@example.com";
});

inputs.phone.addEventListener("input", () => {
  preview.phone.textContent =
    inputs.phone.value || "+62 xxxx";
});

inputs.address.addEventListener("input", () => {
  preview.address.textContent =
    inputs.address.value || "Alamat";
});

inputs.summary.addEventListener("input", () => {
  preview.summary.textContent =
    inputs.summary.value || "Deskripsi diri.";
});

inputs.education.addEventListener("input", () => {
  preview.education.textContent =
    inputs.education.value || "Riwayat pendidikan.";
});

inputs.experience.addEventListener("input", () => {
  preview.experience.textContent =
    inputs.experience.value || "Pengalaman kerja / organisasi.";
});

inputs.skills.addEventListener("input", () => {
  preview.skills.textContent =
    inputs.skills.value || "HTML, CSS, JavaScript";
});
const photoInput = document.getElementById("photo");
const previewPhoto = document.getElementById("previewPhoto");

photoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      previewPhoto.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
const downloadBtn = document.getElementById("downloadBtn");
const previewBox = document.querySelector(".preview-box");

downloadBtn.addEventListener("click", () => {
  const opt = {
    margin: 0.5,
    filename: "CV_Kandidat.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf().set(opt).from(previewBox).save();
});