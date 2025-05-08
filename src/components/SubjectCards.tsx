
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const subjects = [
  {
    id: 1,
    name: "Русский язык",
    icon: "FileText",
    color: "bg-red-100 text-red-600",
    students: 320,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Математика (профиль)",
    icon: "PieChart",
    color: "bg-blue-100 text-blue-600",
    students: 450,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Обществознание",
    icon: "Users",
    color: "bg-amber-100 text-amber-600",
    students: 280,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Физика",
    icon: "Atom",
    color: "bg-indigo-100 text-indigo-600",
    students: 195,
    rating: 4.9,
  },
  {
    id: 5,
    name: "История",
    icon: "BookOpen",
    color: "bg-orange-100 text-orange-600",
    students: 210,
    rating: 4.8,
  },
  {
    id: 6,
    name: "Английский язык",
    icon: "Globe",
    color: "bg-green-100 text-green-600",
    students: 265,
    rating: 4.9,
  },
  {
    id: 7,
    name: "Биология",
    icon: "Flower",
    color: "bg-lime-100 text-lime-600",
    students: 180,
    rating: 4.7,
  },
  {
    id: 8,
    name: "Химия",
    icon: "Flask",
    color: "bg-emerald-100 text-emerald-600",
    students: 150,
    rating: 4.8,
  },
];

const SubjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {subjects.map((subject) => (
        <Card key={subject.id} className="overflow-hidden hover-scale transition-all duration-200 group">
          <CardContent className="p-6">
            <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center mb-4`}>
              <Icon name={subject.icon} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
            <div className="flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Users" className="w-4 h-4 mr-1" />
                {subject.students} учеников
              </div>
              <div className="flex items-center">
                <Icon name="Star" className="w-4 h-4 mr-1 text-yellow-500" />
                {subject.rating}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Подробнее
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SubjectCards;
