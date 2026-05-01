import { useCallback, useEffect, useState } from "react";
import logo from "@/assets/ezeat-logo.png";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ezeat/Hero";
import { Quiz, type Answers } from "@/components/ezeat/Quiz";
import { Results } from "@/components/ezeat/Results";
import { DemoContext } from "@/components/ezeat/demoLink";
import { DemoDialog } from "@/components/ezeat/DemoDialog";

type Stage = "hero" | "quiz" | "results";

const Index = () => {
  const [stage, setStage] = useState<Stage>("hero");
  const [answers, setAnswers] = useState<Answers>({});
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = useCallback(() => setDemoOpen(true), []);

  useEffect(() => {
    document.title = "EzEat · Diagnóstico de eficiencia para tu restaurante";
    const desc = "Descubre qué tecnología necesita tu restaurante para escalar. Diagnóstico gratuito en 60 segundos con EzEat.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  useEffect(() => {
    if (stage !== "hero") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stage]);

  return (
    <DemoContext.Provider value={{ openDemo }}>
      <main className="min-h-screen">
        {/* Nav */}
        <header className="fixed top-0 inset-x-0 z-50">
          <div className="container flex items-center justify-between py-4">
            <button onClick={() => setStage("hero")} className="flex items-center gap-2 group">
              <img src={logo} alt="EzEat logo" className="w-11 h-11 transition-transform group-hover:scale-110" />
              <span className="text-xl font-extrabold tracking-tight">EzEat</span>
            </button>
            <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <button onClick={() => setStage("quiz")} className="hover:text-foreground transition-colors">
                Diagnóstico
              </button>
              <button onClick={openDemo} className="hover:text-foreground transition-colors">
                Demo
              </button>
            </nav>
            <Button variant="hero" size="sm" onClick={() => setStage("quiz")}>
              Comenzar
            </Button>
          </div>
        </header>

        {stage === "hero" && <Hero onStart={() => setStage("quiz")} />}
        {stage === "quiz" && (
          <Quiz
            onComplete={(a) => {
              setAnswers(a);
              setStage("results");
            }}
            onClose={() => setStage("hero")}
          />
        )}
        {stage === "results" && (
          <Results answers={answers} onRestart={() => { setAnswers({}); setStage("quiz"); }} />
        )}

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          <div className="container">
            © {new Date().getFullYear()} EzEat · Tecnología para restaurantes que escalan.
          </div>
        </footer>

        <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
      </main>
    </DemoContext.Provider>
  );
};

export default Index;
