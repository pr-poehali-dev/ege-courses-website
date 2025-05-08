
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SubjectCards from "@/components/SubjectCards";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">ЕГЭ</span>Мастер
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary">Курсы</a>
            <a href="#features" className="text-sm font-medium hover:text-primary">Преимущества</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">Войти</Button>
            <Button>Начать бесплатно</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
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

        {/* Course Section */}
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

        {/* Features Section */}
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

        {/* Stats Section */}
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших учеников</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Узнайте, что говорят о нас выпускники, успешно поступившие в лучшие вузы страны
              </p>
            </div>
            
            <TestimonialsSection />
          </div>
        </section>

        {/* CTA Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Остались вопросы?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут, чтобы ответить на все ваши вопросы
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Icon name="Mail" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@egemaster.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Icon name="Phone" />
                    </div>
                    <div>
                      <h3 className="font-medium">Телефон</h3>
                      <p className="text-sm text-muted-foreground">+7 (800) 123-45-67</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-200 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold mb-4 text-white">ЕГЭМастер</div>
              <p className="text-slate-400 max-w-xs">
                Онлайн-курсы подготовки к ЕГЭ от лучших преподавателей России
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Курсы</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Предметы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Русский язык</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Математика</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Обществознание</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Все предметы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Связаться</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@egemaster.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400">© 2025 ЕГЭМастер. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
