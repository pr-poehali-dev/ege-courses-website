
import FeatureSection from "@/components/FeatureSection";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создали идеальные условия для успешной подготовки к ЕГЭ
          </p>
        </div>
        
        <FeatureSection />
      </div>
    </section>
  );
};

export default FeaturesSection;
