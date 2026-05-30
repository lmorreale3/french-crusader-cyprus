import Link from "next/link";

const universities = [
  { name: "University of Pennsylvania", href: "https://www.upenn.edu" },
  { name: "University of Rhode Island", href: "https://www.uri.edu" },
  { name: "Tel Aviv University", href: "https://www.tau.ac.il" },
];

const footerLinks = [
  { name: "About the Project", href: "/about" },
  { name: "Teaching Resources", href: "/teaching" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {universities.map((uni) => (
            <a
              key={uni.name}
              href={uni.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm hover:opacity-90"
            >
              {uni.name}
            </a>
          ))}
        </div>
        <nav className="flex justify-center gap-6 mb-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-90">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm opacity-80">
          <p className="mb-1">French Texts from Crusader Cyprus Project</p>
          <p>
            This project is supported by the National Endowment for the
            Humanities.
          </p>
        </div>
      </div>
    </footer>
  );
}
