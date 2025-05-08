
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
