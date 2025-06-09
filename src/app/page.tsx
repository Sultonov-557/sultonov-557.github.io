import "./globals.css";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Phone, Mail, MapPin, Calendar, Code, Database, Server, Globe, ExternalLink, MessageCircle } from "lucide-react";

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: ["JavaScript", "TypeScript"],
    frameworks: ["NestJS", "ExpressJS"],
    databases: ["MySQL", "PostgreSQL", "Redis"],
    orms: ["Prisma", "TypeORM"],
    tools: ["Docker", "pm2", "Git", "Linux"],
    others: ["REST APIs", "WebSockets", "Unit Testing (Jest)", "CI/CD Basics"],
  };

  const projects = [
    {
      name: "e-bilim.uz",
      description: "Educational platform with comprehensive backend architecture",
      url: "https://e-bilim.uz",
    },
    {
      name: "sulaymonhotel.uz",
      description: "Hotel management system with booking functionality",
      url: "https://sulaymonhotel.uz",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600">
              <img src="/me.png" alt="Sultonov Zerifboy" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sultonov Zerifboy</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Backend Developer</p>
          <p className="text-lg text-gray-400 mb-8">Middle Level • 2 Years Experience • Age 17</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Code className="w-4 h-4 mr-2" />
              JavaScript & TypeScript
            </Badge>
            <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
              <Server className="w-4 h-4 mr-2" />
              NestJS & ExpressJS
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Database className="w-4 h-4 mr-2" />
              SQL & NoSQL
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate 17-year-old Backend Developer with 2 years of hands-on experience in building robust, scalable web applications. Despite my young age, I've
                developed a strong foundation in modern backend technologies and have successfully delivered multiple production-ready projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise lies in JavaScript and TypeScript ecosystems, with deep knowledge of NestJS and ExpressJS frameworks. I'm proficient in database design and management,
                API development, and modern DevOps practices.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Born in 2007</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Uzbekistan</span>
                </div>
              </div>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white font-medium">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level</span>
                    <span className="text-white font-medium">Middle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Codewars Rank</span>
                    <span className="text-white font-medium">3 kyu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-white font-medium">2+ Major</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl text-white font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl text-white font-semibold">Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl text-white font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl text-white font-semibold">ORMs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.orms.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl text-white font-semibold">Tools & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-red-600/20 text-red-300 border-red-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl text-white font-semibold">Others</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.others.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-600/20 text-cyan-300 border-cyan-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-blue-400">{project.name}</h3>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Globe className="w-4 h-4" />
                    <span>{project.url}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Data Learning Centre</h3>
                  <p className="text-gray-300 mb-2">NodeJS Backend Development</p>
                  <p className="text-gray-400 text-sm">April 2023 - January 2024</p>
                  <p className="text-gray-300 mt-4">
                    Comprehensive backend development program focusing on Node.js ecosystem, database management, and modern development practices.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Languages</h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Uzbek</span>
                      <Badge className="bg-green-600/20 text-green-300 border-green-500/30">Native</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">English</span>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">Intermediate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Russian</span>
                      <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">Basic</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">Ready to collaborate on your next project? Let's build something amazing together.</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <Button
              variant="outline"
              className="h-16 bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:bg-blue-500/20 text-gray-300 hover:text-white"
              onClick={() => window.open("tel:+998990142907", "_blank")}
            >
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm">Phone</span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-16 bg-gray-800/50 border-gray-700 hover:border-green-500 hover:bg-green-500/20 text-gray-300 hover:text-white"
              onClick={() => window.open("mailto:sultonovzerifboy@gmail.com", "_blank")}
            >
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-16 bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:bg-blue-500/20 text-gray-300 hover:text-white"
              onClick={() => window.open("https://t.me/Sultonov", "_blank")}
            >
              <div className="flex flex-col items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">Telegram</span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-16 bg-gray-800/50 border-gray-700 hover:border-pink-500 hover:bg-pink-500/20 text-gray-300 hover:text-white"
              onClick={() => window.open("https://instagram.com/Sultonov.557", "_blank")}
            >
              <div className="flex flex-col items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </div>
            </Button>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities and interesting projects. Whether you need a backend developer for your startup or want to collaborate on an
                open-source project, feel free to reach out!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open("mailto:sultonovzerifboy@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Sultonov Zerifboy. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
