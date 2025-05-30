
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Offer = () => {
  useEffect(() => {
    // Прокрутка страницы вверх при загрузке
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-12 px-4 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Публичная оферта</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-muted-foreground mb-6">Дата публикации: 9 мая 2025 г.</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p>1.1. Настоящий документ является публичной офертой (предложением) ООО «ЕГЭМастер» (далее — «Исполнитель») и содержит существенные условия предоставления информационно-консультационных услуг.</p>
            <p>1.2. В соответствии с пунктом 3 статьи 438 Гражданского кодекса Российской Федерации (ГК РФ) в случае принятия изложенных ниже условий и оплаты услуг физическое лицо, производящее акцепт этой оферты, становится Заказчиком.</p>
            <p>1.3. В связи с вышеизложенным, внимательно прочитайте текст данной публичной оферты. Если Вы не согласны с каким-либо пунктом оферты, Исполнитель предлагает Вам отказаться от использования услуг.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Предмет оферты</h2>
            <p>2.1. Предметом настоящей оферты является предоставление Заказчику информационно-консультационных услуг по подготовке к единому государственному экзамену (ЕГЭ) в соответствии с условиями настоящей публичной оферты и текущими условиями, опубликованными на сайте Исполнителя.</p>
            <p>2.2. Публичная оферта и приложения к ней являются официальными документами и публикуются на сайте Исполнителя.</p>
            <p>2.3. Исполнитель имеет право изменять стоимость услуг, условия данной публичной оферты без предварительного согласования с Заказчиком, публикуя изменения на сайте не менее чем за 5 (пять) дней до их ввода в действие.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Описание услуг</h2>
            <p>3.1. В соответствии с предметом настоящей оферты Исполнитель предоставляет Заказчику следующие виды услуг:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Групповые онлайн-занятия по подготовке к ЕГЭ по выбранным предметам;</li>
              <li>Индивидуальные онлайн-консультации с преподавателями;</li>
              <li>Доступ к образовательным материалам и тестам в личном кабинете;</li>
              <li>Проведение пробных экзаменов в формате ЕГЭ с проверкой работ.</li>
            </ul>
            <p>3.2. Продолжительность одного занятия составляет 90 минут, если иное не указано в описании конкретного курса.</p>
            <p>3.3. Формат оказания услуг - дистанционный, через сеть Интернет посредством специализированной платформы для проведения онлайн-занятий.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Условия и порядок предоставления услуг</h2>
            <p>4.1. Для получения услуг Заказчик должен оформить заявку через сайт Исполнителя или посредством телефонной связи.</p>
            <p>4.2. После оформления заявки Заказчику на указанный им адрес электронной почты направляется счет на оплату выбранного курса.</p>
            <p>4.3. После проведения Заказчиком оплаты и зачисления денежных средств на счет Исполнителя, договор вступает в силу.</p>
            <p>4.4. Заказчик получает доступ к личному кабинету на образовательной платформе, где размещаются учебные материалы и ссылки для подключения к онлайн-занятиям.</p>
            <p>4.5. Услуги считаются оказанными надлежащим образом и в полном объеме, если в течение 3 (трех) рабочих дней с момента окончания оказания услуг Заказчик не предъявил претензию.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Стоимость услуг и порядок расчетов</h2>
            <p>5.1. Стоимость услуг определяется Исполнителем и указывается на сайте.</p>
            <p>5.2. Оплата услуг производится Заказчиком в российских рублях путем перечисления денежных средств на расчетный счет Исполнителя или с использованием предлагаемых на сайте платежных систем.</p>
            <p>5.3. Заказчик вправе оплатить стоимость услуг единовременно в полном объеме или воспользоваться рассрочкой платежа (при наличии такой возможности).</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Права и обязанности сторон</h2>
            <p><strong>6.1. Исполнитель обязуется:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Организовать и обеспечить надлежащее предоставление услуг в соответствии с программой курса;</li>
              <li>Обеспечить Заказчика необходимыми учебными материалами;</li>
              <li>Сохранять конфиденциальность информации Заказчика;</li>
              <li>Информировать Заказчика обо всех изменениях в расписании занятий.</li>
            </ul>
            
            <p><strong>6.2. Заказчик обязуется:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Своевременно вносить плату за предоставляемые услуги;</li>
              <li>Не распространять полученные учебные материалы третьим лицам;</li>
              <li>Не осуществлять запись онлайн-занятий без согласия Исполнителя;</li>
              <li>Обеспечить наличие технических средств и подключения к сети Интернет для получения услуг.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Ответственность сторон</h2>
            <p>7.1. За неисполнение или ненадлежащее исполнение своих обязательств по настоящему договору стороны несут ответственность в соответствии с законодательством Российской Федерации.</p>
            <p>7.2. Исполнитель не несет ответственности за невозможность оказания услуг Заказчику по причинам, не зависящим от Исполнителя, включая нарушение работы линий связи, неисправность оборудования и т.п.</p>
            <p>7.3. Заказчик несет полную ответственность за сохранность своих логина и пароля и за убытки, которые могут возникнуть по причине их несанкционированного использования.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Срок действия и изменение условий оферты</h2>
            <p>8.1. Настоящая публичная оферта вступает в силу с момента ее размещения на сайте Исполнителя и действует до момента ее отзыва.</p>
            <p>8.2. Исполнитель оставляет за собой право внести изменения в условия оферты или отозвать оферту в любой момент по своему усмотрению.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Заключительные положения</h2>
            <p>9.1. Во всем остальном, что не предусмотрено настоящей офертой, стороны руководствуются действующим законодательством Российской Федерации.</p>
            <p>9.2. Все споры и разногласия между сторонами решаются путем переговоров. В случае невозможности урегулирования спора путем переговоров, спор подлежит разрешению в судебном порядке в соответствии с законодательством РФ.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Реквизиты</h2>
            <p><strong>ООО «ЕГЭМастер»</strong></p>
            <p>ИНН: 7701234567</p>
            <p>ОГРН: 1157746123456</p>
            <p>Юридический адрес: 123456, г. Москва, ул. Примерная, д. 123</p>
            <p>Фактический адрес: 123456, г. Москва, ул. Примерная, д. 123, офис 45</p>
            <p>Телефон: +7 (800) 123-45-67</p>
            <p>Email: info@egemaster.ru</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offer;
