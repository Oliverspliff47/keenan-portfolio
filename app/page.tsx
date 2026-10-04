const statementSections = [
  {
    id: "practice",
    number: "01",
    label: "Beginning",
    text: (
      <>
        I am <strong>Keenan Oliver</strong>, from Lentegeur, Mitchells Plain.
        I picked up a pen and pencil early and kept drawing. In high school I
        began designing through Graphics at Tygerberg Art Centre. I later
        studied Marketing at CPUT. Those were different ways into the world of
        images, language and the people they reach.
      </>
    ),
  },
  {
    id: "method",
    number: "02",
    label: "Images",
    text: (
      <>
        My early work moved through independent publications, photography,
        visual research, music videos, film and social platforms. These were
        places to make images, but also to ask what happens to them once they
        circulate. Photographing the work of Leaf Apparel and Autodidacts
        &amp; Associates, I spoke about the importance of documenting your
        own work and life: it gives you power over your story.{" "}
        <a href="https://archive.bubblegumclub.co.za/fashion/autodidacts-associates-want-you-to-stop-and-think-about-your-streetwear/">
          Read the conversation
        </a>
        .
      </>
    ),
  },
  {
    id: "archive",
    number: "03",
    label: "City",
    text: (
      <>
        Cape Town is where this work has taken shape. Its creative life does
        not belong to one neighbourhood or institution, even when access to
        space and visibility is uneven. I have worked across temporary
        cultural platforms, commercial production and places people gather:
        from social media production for{" "}
        <a href="https://theplugmag.com/adidas-originals-campus-area3-cpt-17/">
          AREA3 CPT &rsquo;17
        </a>{" "}
        to being a founding partner of{" "}
        <a href="https://artefactsoffice.com/babbi-deli-bar">
          Babbi Deli &amp; Bar
        </a>
        . Each setting has a different audience, pace and idea of what a
        visual identity needs to do.
      </>
    ),
  },
  {
    id: "infrastructure",
    number: "04",
    label: "Office",
    text: (
      <>
        I founded <a href="https://artefactsoffice.com">Artefacts Office</a>{" "}
        in 2022 and lead it as creative director. The office brings together
        identity, publishing, image-making and spatial communication. Its
        projects have ranged from book design for{" "}
        <a href="https://artefactsoffice.com/lost-libraries">
          Lost Libraries, Burnt Archives
        </a>{" "}
        to exhibition identity for{" "}
        <a href="https://artefactsoffice.com/zozm-identity">
          Zohra Opoku at Zeitz MOCAA
        </a>
        . My personal practice runs alongside it: a continuing interest in
        how design can give form to a moment and leave a legible trace of it.
      </>
    ),
  },
];

const references = [
  ["001", "On documenting your own work", "Bubblegum Club / Leaf Apparel", "https://archive.bubblegumclub.co.za/fashion/autodidacts-associates-want-you-to-stop-and-think-about-your-streetwear/"],
  ["002", "A place built with others", "Babbi Deli & Bar", "https://artefactsoffice.com/babbi-deli-bar"],
  ["003", "Designing for a living archive", "Lost Libraries, Burnt Archives", "https://artefactsoffice.com/lost-libraries"],
  ["004", "The office and its projects", "Artefacts Office", "https://artefactsoffice.com"],
];

export default function Home() {
  return (
    <main>
      <header className="masthead" aria-label="Site header">
        <a className="wordmark" href="#top" aria-label="Keenan Oliver, home">
          Keenan Oliver
        </a>
        <p>Designer / Creative director</p>
        <p className="place">Cape Town, South Africa</p>
      </header>

      <div id="top" className="page-shell">
        <div className="opening-spread">
          <section className="statement" aria-labelledby="statement-title">
            <div className="introduction">
              <p className="eyebrow">A personal practice / Cape Town</p>
              <h1 id="statement-title">I began with drawing.</h1>
              <p className="lead">
                I am Keenan Oliver, founder and creative director of Artefacts
                Office. I work across graphic design, publishing and
                image-making, with an interest in who gets to make, circulate
                and keep a record of culture.
              </p>
            </div>

            {statementSections.map((section) => (
              <article className="statement-row" id={section.id} key={section.id}>
                <div className="statement-key" aria-hidden="true">
                  <span>{section.number}</span>
                  <span>{section.label}</span>
                </div>
                <p>{section.text}</p>
              </article>
            ))}
          </section>

          <figure className="portrait-plate">
            <img
              src="/keenan-oliver-office-portrait.png"
              alt="Photocopied self-portrait of Keenan Oliver with the word Office and assembled graphic elements"
              width="1448"
              height="2048"
            />
            <figcaption>
              <span>Fig. 01</span>
              <span>Self-portrait / Office</span>
            </figcaption>
          </figure>
        </div>

        <section className="lower-grid" aria-label="Selected references and contact">
          <div className="index-block">
            <div className="section-heading">
              <span>Selected references</span>
              <span aria-hidden="true">↓</span>
            </div>

            <ol className="index-list">
              {references.map(([number, title, detail, href]) => (
                <li key={number}>
                  <span className="item-number">{number}</span>
                  <a href={href}>
                    <span>{title}</span>
                    <span className="item-detail">{detail}</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <aside className="studio-note">
            <p className="section-heading">Artefacts Office</p>
            <p>
              I founded and lead <a href="https://artefactsoffice.com">Artefacts Office</a>.
              This site follows the personal experiences and questions that
              inform the work; the office site holds its wider portfolio.
            </p>
          </aside>

          <div className="contact-block">
            <div className="section-heading">
              <span>Get in touch</span>
              <span aria-hidden="true">↓</span>
            </div>
            <div className="contact-row">
              <span className="item-number">005</span>
              <a href="mailto:work@artefactsoffice.com">
                <span>For collaborations and projects</span>
                <span className="contact-address">work@artefactsoffice.com</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>Keenan Oliver / Artefacts Office</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
