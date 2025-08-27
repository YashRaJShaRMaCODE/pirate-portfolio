"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
  Anchor,
  AnchorIcon,
  Compass,
  Github,
  Linkedin,
  Mail,
  Map,
  Swords,
  Ship,
  Shield,
  Database,
  Code,
  FileText,
} from "lucide-react";

// ====== 3D COMPONENTS ======
function Ocean() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!mesh.current) return;
    mesh.current.position.y = Math.sin(t * 0.5) * 0.1;
    mesh.current.rotation.z = Math.sin(t * 0.1) * 0.05;
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[40, 64]} />
      <meshStandardMaterial color="#0b2a41" roughness={0.6} metalness={0.3} />
    </mesh>
  );
}


function SimpleShip() {
  const hull = useRef<any>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!hull.current) return;
    hull.current.position.y = Math.sin(t * 1.2) * 0.15 + 0.35;
    hull.current.rotation.z = Math.sin(t * 0.6) * 0.05;
    hull.current.rotation.x = Math.cos(t * 0.4) * 0.02;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={hull} position={[0, 0.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.8, 0.4, 1]} />
          <meshStandardMaterial color="#6b3e2e" />
        </mesh>
        <mesh castShadow position={[0, -0.25, 0]}>
          <boxGeometry args={[2.6, 0.2, 0.8]} />
          <meshStandardMaterial color="#5a2f22" />
        </mesh>
        <mesh castShadow position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 2.2, 12]} />
          <meshStandardMaterial color="#8b5a3c" />
        </mesh>
        <mesh castShadow position={[0.6, 1.2, 0]} rotation={[0, 0, 0.05]}>
          <planeGeometry args={[1.6, 1.2, 1, 1]} />
          <meshStandardMaterial color="#f0e6c8" side={2} />
        </mesh>
        <mesh castShadow position={[0, 2.3, 0]}>
          <planeGeometry args={[0.5, 0.25]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <mesh castShadow position={[1.6, -0.1, 0]} rotation={[0, 0, 0.2]}>
          <coneGeometry args={[0.12, 0.4, 12]} />
          <meshStandardMaterial color="#a16207" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <Canvas shadows camera={{ position: [4, 3, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 7, 3]} intensity={1} castShadow />
      <Stars radius={60} depth={20} count={5000} factor={4} saturation={0} fade />
      <Ocean />
      <SimpleShip />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );
}

// ====== DATA ======
const PROJECTS = [
  {
    title: "E-Commerce Order Database (2023)",
    summary: "Designed and implemented a normalized SQL database. Wrote 40+ queries for analytics and business insights.",
    href: "#",
    tags: ["SQL", "Database", "Reports"],
  },
  {
    title: "Cinescope (2024)",
    summary: "Full-stack Django movie app with authentication, listings, ratings, and reviews. Styled with Bootstrap, integrated MySQL backend.",
    href: "#",
    tags: ["Django", "Bootstrap", "MySQL"],
  },
  {
    title: "MiniLang (2024)",
    summary: "Built a toy interpreter with recursive descent parsing & AST evaluation. Inspired by compiler design.",
    href: "#",
    tags: ["C++", "Parsing", "Compilers"],
  },
  {
    title: "Threaded File Crawler (2025)",
    summary: "Multi-threaded filesystem indexer using POSIX APIs & C++ threading for metadata extraction.",
    href: "#",
    tags: ["C++", "Threads", "System Programming"],
  },
];

const SKILLS = [
  { name: "Python", icon: <Code className="w-5 h-5" />, desc: "Scripting, ML, data tooling." },
  { name: "SQL", icon: <Database className="w-5 h-5" />, desc: "Queries, design, EDA." },
  { name: "C++", icon: <Swords className="w-5 h-5" />, desc: "DSA & system-level programming." },
  { name: "Data Tools", icon: <Shield className="w-5 h-5" />, desc: "Pandas, NumPy, Tableau, Power BI." },
  { name: "Web Dev", icon: <Ship className="w-5 h-5" />, desc: "React, Django, Bootstrap, Tailwind." },
  { name: "Version Control", icon: <AnchorIcon className="w-5 h-5" />, desc: "Git, GitHub, teamwork." },
];

const CERTS = [
  "Full Stack Web Development – Udemy (May 2025)",
  "SQL Server – Udemy (May 2025)",
  "Python Bootcamp – Infosys Springboard (Aug 2024)",
  "Machine Learning & Deep Learning Specialization – Udemy (Dec 2024)",
  "Data Management & Deep Learning – Coursera (Jan 2024)",
];


// ====== REACT PAGE ======
export default function PiratePortfolio() {
  return (
    <main className="min-h-screen text-stone-100 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 selection:bg-yellow-300 selection:text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/50 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 ring-1 ring-yellow-500/30">
              <Anchor className="w-4 h-4" />
            </span>
            <p className="font-black tracking-wide text-lg md:text-xl">
              Captain Yash <span className="text-yellow-400">— Portfolio</span>
            </p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-yellow-300 transition">Captain's Log</a>
            <a href="#projects" className="hover:text-yellow-300 transition">Treasures</a>
            <a href="#skills" className="hover:text-yellow-300 transition">Arsenal</a>
            <a href="#certs" className="hover:text-yellow-300 transition">Maps</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Secret Island</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/YashRaJShaRMaCODE" className="p-2 hover:bg-white/5 rounded-xl"><Github className="w-5 h-5"/></a>
            <a href="https://www.linkedin.com/in/yash-raj-sharma-4627bb212" className="p-2 hover:bg-white/5 rounded-xl"><Linkedin className="w-5 h-5"/></a>
            <a href="mailto:yashrajsharma786jmd@gmail.com" className="p-2 hover:bg-white/5 rounded-xl"><Mail className="w-5 h-5"/></a>
         <a href="/Yash_Raj_Sharma_Resume.pdf" download className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
  📜 Download Résumé
</a>
 </div>
        </div>
      </header>

      {/* HERO */}
      <section id="map" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}
              className="text-3xl md:text-5xl font-black leading-tight">
              Hoist the Colors: <span className="text-yellow-300">Pirate Portfolio</span>
            </motion.h1>
            <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.1}}
              className="mt-3 text-stone-300">
              I'm <span className="text-yellow-300 font-semibold">Yash Raj Sharma</span>, a 4th-year B.Tech CSE student at YMCA University, Faridabad (CGPA 8.0).  
              Passionate about <b>interpreters, databases, full-stack development, and open source</b>.
            </motion.p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-stone-300">
              <div className="flex items-center gap-2"><Compass className="w-4 h-4 text-yellow-300"/>Faridabad, IN</div>
              <div className="flex items-center gap-2"><Ship className="w-4 h-4 text-yellow-300"/>Open to Internships</div>
            </div>
          </div>
          <div className="h-[380px] md:h-[480px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-950">
            <Scene />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="p-5 rounded-3xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-extrabold flex items-center gap-2"><Map className="w-5 h-5 text-yellow-400"/> Captain's Log</h2>
          <ul className="mt-4 text-sm space-y-2">
            <li>🎓 B.Tech Computer Science, YMCA University, Faridabad (2022–2026)</li>
            <li>⚔️ Software Intern @ Luneblaze (Jan–Aug 2023) — optimized platform features & performance.</li>
            <li>🗺️ Course Creator @ Yhills Education (Jul–Dec 2024) — authored 20hr SQL course (MySQL, PostgreSQL, SQLite, Oracle).</li>
            <li>⚡ Open-source contributor — MariaDB, PostgreSQL, EvalAI projects.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-2"><Swords className="w-5 h-5 text-yellow-400"/> Treasures Found</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{opacity: 0, y: 12}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 0.4, delay: i * 0.07}}
              className="p-5 rounded-3xl bg-white/5 ring-1 ring-white/10">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-stone-300">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-xl bg-black/30 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-2"><Shield className="w-5 h-5 text-yellow-400"/> Arsenal</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div key={s.name} initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 0.35, delay: i*0.06}}
              className="p-4 rounded-3xl bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center gap-2 font-semibold">{s.icon}{s.name}</div>
              <p className="text-sm text-stone-300 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-2"><FileText className="w-5 h-5 text-yellow-400"/> Maps Collected</h2>
        <ul className="mt-6 space-y-3 text-sm text-stone-300">
          {CERTS.map((c, i) => (
            <motion.li key={i} initial={{opacity: 0, y: 8}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 0.3, delay: i*0.05}}>
              {c}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold flex items-center gap-2"><AnchorIcon className="w-5 h-5 text-yellow-400"/> Secret Island</h2>
            <p className="mt-2 text-stone-300 text-sm">Cast a message in a bottle and it will find its way to my cabin.</p>
            <form action="https://formsubmit.co/yashrajsharma786jmd@gmail.com" method="POST" className="mt-5 grid gap-3">
              <input type="hidden" name="_captcha" value="false" />
              <input name="name" required placeholder="Your Name" className="px-4 py-3 rounded-2xl bg-black/30 ring-1 ring-white/10"/>
              <input type="email" name="email" required placeholder="Your Email" className="px-4 py-3 rounded-2xl bg-black/30 ring-1 ring-white/10"/>
              <textarea name="message" required placeholder="Message" className="px-4 py-3 rounded-2xl bg-black/30 ring-1 ring-white/10"/>
              <button type="submit" className="px-4 py-3 rounded-2xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition">Send Message</button>
            </form>
          </div>
          <div className="text-sm text-stone-300 space-y-2">
            <p>📍 Faridabad, Haryana, India</p>
            <p>📧 yashrajsharma786jmd@gmail.com</p>
            <p>🌍 <a href="https://github.com/YashRaJShaRMaCODE" className="text-yellow-300 hover:underline">GitHub</a> | <a href="https://linkedin.com/in/yash-raj-sharma-4627bb212" className="text-yellow-300 hover:underline">LinkedIn</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
