
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4">Подготовка к ЕГЭ 2025</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Подготовься к ЕГЭ<br />
              <span className="text-primary">с лучшими экспертами</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Онлайн-курсы подготовки к ЕГЭ от преподавателей с опытом работы в крупнейших школах России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Выбрать курс</Button>
              <Button size="lg" variant="outline">Бесплатная консультация</Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-background w-8 h-8">
                    <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 10}`} />
                    <AvatarFallback>АБ</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">500+</span> учеников уже выбрали нас
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
              alt="Студенты готовятся к ЕГЭ" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
