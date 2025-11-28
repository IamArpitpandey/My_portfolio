import { Download } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "SOAR – AI to be Aware Certification",
    image: "/certifications/cer1.png",
    file: "/certifications/cer1.pdf",
  },
  {
    id: 2,
    title: "Web Development Certification",
    image: "/certifications/cer5.png",
    file: "/certifications/cer5.pdf",
  },
  {
    id: 3,
    title: "Software Architecture and System Design Certification",
    image: "/certifications/cer2.png",
    file: "/certifications/cer2.pdf",
  },
  {
    id: 4,
    title: "Young Turks Certification",
    image: "/certifications/cer3.jpg",   // tumhare folder me JPG hai
    file: "/certifications/cer3.pdf",
  },
  {
    id: 5,
    title: "Machine Learning Certification",
    image: "/certifications/cer4.png",
    file: "/certifications/cer4.pdf",
  },
  {
    id: 6,
    title: "MySQL / Database Certification",
    image: "/certifications/cer6.png",
    file: "/certifications/cer6.pdf",
  },
];


export const CertificationSection = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>

                <a
                  href={cert.file}
                  download
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-background hover:bg-primary/90 transition"
                >
                  Download <Download size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

