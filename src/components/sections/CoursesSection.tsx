
import SubjectCards from "@/components/SubjectCards";

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выбери свой предмет</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подготовка по всем предметам ЕГЭ с гарантией повышения баллов
          </p>
        </div>
        
        <SubjectCards />
      </div>
    </section>
  );
};

export default CoursesSection;
