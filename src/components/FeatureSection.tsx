
import Icon from "@/components/ui/icon";

const features = [
  {
    id: 1,
    title: "Опытные преподаватели",
    description: "Каждый преподаватель имеет большой опыт подготовки к ЕГЭ и работает по авторской методике",
    icon: "GraduationCap",
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    description: "Мы разрабатываем персональную траекторию обучения с учетом уровня знаний и целей ученика",
    icon: "Target",
  },
  {
    id: 3,
    title: "Удобный формат",
    description: "Занятия проходят в онлайн-формате с использованием современных технологий и интерактивной доски",
    icon: "Laptop",
  },
  {
    id: 4,
    title: "Регулярная практика",
    description: "Еженедельные тесты и домашние задания помогают закрепить материал и отслеживать прогресс",
    icon: "ClipboardCheck",
  },
  {
    id: 5,
    title: "Доступ к материалам",
    description: "Записи всех занятий, презентации и дополнительные материалы доступны в личном кабинете",
    icon: "FolderOpen",
  },
  {
    id: 6,
    title: "Пробные экзамены",
    description: "Регулярные пробные ЕГЭ в формате реального экзамена помогают снизить стресс перед настоящим ЕГЭ",
    icon: "FileCheck",
  },
];

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
            <Icon name={feature.icon} className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
