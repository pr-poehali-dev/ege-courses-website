
const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-primary-foreground/80">Сдают на 80+ баллов</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-primary-foreground/80">Опытных преподавателей</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1200+</div>
            <div className="text-primary-foreground/80">Довольных студентов</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10 лет</div>
            <div className="text-primary-foreground/80">Успешной работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
