
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    id: 1,
    name: "Анна Смирнова",
    avatar: "https://i.pravatar.cc/150?img=5",
    university: "МГУ, факультет журналистики",
    score: 98,
    text: "Благодаря курсам по русскому языку и литературе я смогла набрать высокие баллы и поступить на бюджет в МГУ. Преподаватели очень внимательные, всегда готовы ответить на вопросы и помочь с трудными темами.",
    initials: "АС",
  },
  {
    id: 2,
    name: "Максим Петров",
    avatar: "https://i.pravatar.cc/150?img=12",
    university: "МФТИ, факультет прикладной математики",
    score: 96,
    text: "Курс по математике превзошел все мои ожидания. Сложные темы объяснялись доступно и понятно. Особенно помогли пробные экзамены, которые готовят к реальному ЕГЭ не только содержательно, но и психологически.",
    initials: "МП",
  },
  {
    id: 3,
    name: "Екатерина Иванова",
    avatar: "https://i.pravatar.cc/150?img=9",
    university: "ВШЭ, факультет экономики",
    score: 94,
    text: "Занималась на курсах по обществознанию и истории. Материал подается структурировано, что очень помогает при подготовке к ЕГЭ. Индивидуальный подход и постоянная обратная связь — то, что действительно отличает эти курсы от других.",
    initials: "ЕИ",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.university}</div>
                  </div>
                </div>
                <div className="flex items-center px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                  <Icon name="Award" className="w-3 h-3 mr-1" />
                  {testimonial.score} баллов
                </div>
              </div>
              <div className="text-yellow-500 flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 fill-yellow-500" />
                  ))}
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialsSection;
