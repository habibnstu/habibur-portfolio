export const profile = {
  name: "MD. Habibur Rahman",
  shortName: "Habibur Rahman",
  role: ".NET Full Stack Developer",
  email: "mdhabibnstu@gmail.com",
  phone: "+88 01581901743",
  whatsapp: "8801581901743",
  location: "Mirpur-1, Dhaka, Bangladesh",
  github: "https://github.com/habibnstu",
  linkedin: "https://linkedin.com/in/habibnstu",
  cv: "/cv/CV Habibur Rahman.pdf",
};

export const whatsappLink = (message = "Hello MD. Habibur Rahman, I would like to hire you.") =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
