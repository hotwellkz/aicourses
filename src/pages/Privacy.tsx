import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности | Python с ИИ-учителем</title>
        <meta
          name="description"
          content="Политика конфиденциальности сервиса Python с ИИ-учителем. Узнайте, как мы защищаем ваши персональные данные."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Определения</h2>
            <p>
              Интернет проект pyai.site (далее – URL, «мы») серьезно относится к вопросу конфиденциальности информации своих клиентов и посетителей сайта pyai.site (далее – «вы», «посетители сайта»). Персонифицированной мы называем информацию, содержащую персональные данные (например: ФИО, логин или название компании) посетителя сайта, а также информацию о действиях, совершаемых вами на сайте URL (например: заказ посетителя сайта с его контактной информацией). Анонимными мы называем данные, которые невозможно однозначно идентифицировать с конкретным посетителем сайта (например: статистика посещаемости сайта).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Использование информации</h2>
            <p>
              Мы используем персонифицированную информацию конкретного посетителя сайта исключительно для обеспечения ему качественного оказания услуг и их учета. Мы не раскрываем персонифицированных данных одних посетителей сайта URL другим посетителям сайта. Мы никогда не публикуем персонифицированную информацию в открытом доступе и не передаем ее третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Ссылки</h2>
            <p>
              Сайт pyai.site может содержать ссылки на другие сайты, не имеющие отношения к нашей компании и принадлежащие третьим лицам. Мы не несем ответственности за точность, полноту и достоверность сведений, размещенных на сайтах третьих лиц, и не берем на себя никаких обязательств по сохранению конфиденциальности информации, оставленной вами на таких сайтах.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Ограничение ответственности</h2>
            <p>
              Мы делаем все возможное для соблюдения настоящей политики конфиденциальности, однако, мы не можем гарантировать сохранность информации в случае воздействия факторов находящихся вне нашего влияния, результатом действия которых станет раскрытие информации. Сайт pyai.site и вся размещенная на нем информация представлены по принципу "как есть" без каких-либо гарантий.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Контакты</h2>
            <p>
              По вопросам, касающимся настоящей политики, просьба обращаться по адресу pyai.site@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Юридическое лицо</h2>
            <p>
              ИП "Vitvix"<br />
              БИН: 840713302106<br />
              Банковские реквизиты: АО "Банк ЦентрКредит" КОД 19, ИИК KZ738562204140586741, KCJBKZKX<br />
              Контакты: +77475000217, Email pyai.site@gmail.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;