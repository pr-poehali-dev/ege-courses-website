
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
