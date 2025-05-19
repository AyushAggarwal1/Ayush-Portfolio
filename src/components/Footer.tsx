import { Github, Linkedin, Mail, FileText, Brain, Dock } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/AyushAggarwal1', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ayushaggarwalin', icon: Linkedin },
    { name: 'Email', href: 'mailto:ayushaggarwal1136@gmail.com', icon: Mail },
    { name: 'Medium', href: 'https://medium.com/@ayushaggarwal1136', icon: FileText },
    { name: 'Notion', href: 'https://knowing-spoonbill-268.notion.site/Welcome-to-Ayush-s-Notion-World-833e75a9a45b43d0b73971bf5402ff9d', icon: Brain },
    { name: 'Docker Hub', href: 'https://hub.docker.com/u/ayush1136', icon: Dock }
  ];

  return (
    <footer 
      className="bg-[hsl(var(--color-bg-card))] text-[hsl(var(--color-text-muted))] 
                 py-12 md:py-16 mt-24 md:mt-32 border-t border-[hsl(var(--color-border-soft))]"
    >
      <div className="container mx-auto text-center px-6 md:px-8">
        <div className="mb-8">
          <p className="font-body text-base font-medium text-[hsl(var(--color-text-body))] mb-4">Connect with me</p>
          <div className="flex justify-center space-x-5 md:space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target={link.name === 'Email' ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                aria-label={link.name}
                className="text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))] transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 block"
              >
                <link.icon className="w-6 h-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        
        <p className="font-body text-xs tracking-wider uppercase">&copy; {new Date().getFullYear()} AYUSH. All rights reserved.</p>
        {/* <p className="font-body text-xs text-[hsl(var(--color-text-subtle))] mt-2">
          Lovingly Crafted with Next.js and Tailwind CSS.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer; 