
import TestimonialsComponent from "@/components/TestimonialsSection";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас выпускники, успешно поступившие в лучшие вузы страны
          </p>
        </div>
        
        <TestimonialsComponent />
      </div>
    </section>
  );
};

export default TestimonialsSection;
