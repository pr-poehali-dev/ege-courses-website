import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Курсы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Преподаватели
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="/offer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-white">Предметы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Русский язык
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Математика
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Обществознание
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Все предметы
                </a>
              </li>
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
          <div className="text-slate-400">
            © 2025 ЕГЭМастер. Все права защищены.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Instagram" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Facebook" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Twitter" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
