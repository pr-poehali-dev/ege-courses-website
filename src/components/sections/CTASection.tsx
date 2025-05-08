
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готов начать подготовку к ЕГЭ?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Запишись на бесплатный пробный урок и почувствуй разницу в подходе к обучению
          </p>
          <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-100">
            Записаться на пробный урок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
