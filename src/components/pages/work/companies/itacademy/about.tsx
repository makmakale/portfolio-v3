import AboutTemplate from "work/components/ui/about-template";

export default function About() {
  return (
    <AboutTemplate
      period={{
        startDate: "2020-06-05",
        endDate: "2020-10-19",
      }}
      imageSrc={'https://www.it-academy.by/local/images/logo.svg'}
      link={{href:'https://www.it-academy.by/'}}
    >
      <p>
        IT-Academy opened in 2010, five years after the founding of the High-Tech Park. The center was created to
        prepare aspiring IT specialists for work in the industry. Until October 2019, the activity was carried out under
        the name &#34;Educational Center of the High-Tech Park&#34;. Since the first graduation, a long way of development and
        formation has been covered. In connection with the decade, rebranding has begun. Today, IT-Academy can be proud
        of the title of the best IT education center (according to an independent survey among residents of the
        High-Tech Park).
      </p>
    </AboutTemplate>
  );
}
