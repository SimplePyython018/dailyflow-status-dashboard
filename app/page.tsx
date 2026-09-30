"use client";

import { useMemo, useState } from "react";

type Reflection = {
  no: string;
  label: string;
  question: string;
  choices: string[];
  mirror: string;
};

const reflections: Reflection[] = [
  {
    no: "01",
    label: "THE FIRST QUESTION",
    question: "What if... okay ka naman sa pagiging single, pero may mga araw na mapapaisip ka rin kung gaano kasarap umuwi sa isang taong alam nang kamusta ang buong araw mo?",
    choices: ["Okay lang talaga.", "May mga araw din.", "Depende sa season ng buhay.", "Hindi ko muna sasagutin. 👀"],
    mirror: "Ang pagiging okay mag-isa at ang pagnanais ng kasama ay puwedeng magsabay. Hindi contradiction ang dalawang iyon."
  },
  {
    no: "02",
    label: "THE QUIET QUESTION",
    question: "What if... hindi naman kailangan ng grand love story? Baka sapat muna ang isang taong puwedeng sabihan ng ‘Pagod ako today’ nang hindi kailangang ipaliwanag ang buong backstory.",
    choices: ["That sounds peaceful.", "Mas mahirap pala hanapin.", "Good conversations matter.", "Baka sa tamang oras."],
    mirror: "Companionship is not always spectacle. Minsan, may taong puwedeng paglagyan ng isang ordinaryong araw."
  },
  {
    no: "03",
    label: "THE WRITER'S QUESTION",
    question: "What if... bilang writer, sanay kang magbigay ng boses sa ibang tao — pero sino ang sinusulatan mo kapag ikaw naman ang tahimik?",
    choices: ["A notebook.", "A poem.", "A trusted person.", "Tahimik muna."],
    mirror: "May mga bagay na hindi kailangang gawing publication. May mga salita ring sapat nang marinig ng isang tao."
  },
  {
    no: "04",
    label: "THE WEEKEND THEORY",
    question: "What if... matapos ang mahabang linggo, masarap pala ang may taong hindi humihingi ng performance — presence lang? Yung hindi mo kailangang maging Sir, writer, editor, o taga-ayos ng problema.",
    choices: ["That sounds nice.", "Pahinga muna, please.", "Presence over pressure.", "Interesting thought."],
    mirror: "Hindi lahat ng relasyon ay kailangang may role. Minsan, ang pinakamagandang kasama ay iyong hindi ka pinapapasok sa character."
  },
  {
    no: "05",
    label: "THE REALITY CHECK",
    question: "What if... okay lang pala na hindi mo pa alam kung ano ang gusto mo? Baka hindi naman late ang isang tao dahil wala pa siyang kasamang habang-buhay.",
    choices: ["Exactly.", "Timing matters.", "Everyone has a different pace.", "No deadline on that."],
    mirror: "Hindi contest ang buhay. Walang trophy sa pinakamabilis. May dignity din sa pagbuo ng sariling buhay bago magbukas ng puwang para sa iba."
  },
  {
    no: "06",
    label: "THE QUESTION UNDER THE QUESTION",
    question: "What if... ang pinakaimportanteng tanong ay hindi ‘May jowa ka ba?’ kundi ‘May tao bang puwedeng makasama ang tahimik mong araw?’",
    choices: ["That changes the question.", "Mas personal iyon.", "Mas makabuluhan din.", "Sige, next question. 😭"],
    mirror: "Sometimes a person is not looking for romance. Sometimes they simply want a witness to ordinary life."
  },
  {
    no: "07",
    label: "THE LAST PAGE",
    question: "What if... darating ang araw na may taong hindi kailangang magligtas sa'yo, ayusin ka, o baguhin ka — makikisama lang sa kuwento mo habang pareho kayong lumalakad?",
    choices: ["That would be enough.", "Maybe that's the point.", "Slowly, not perfectly.", "Now that's a good question."],
    mirror: "A good companion does not erase a person's solitude. They simply make the road feel less lonely."
  }
];

const headlines = [
  "EDITORIAL ALERT: ‘Okay lang ako’ may require one follow-up question.",
  "LATE EDITION: One teacher accidentally entered the reflection arc.",
  "OPINION DESK: Being single is not the same as being incomplete.",
  "CITY DESK: A good conversation still counts as a small kind of home.",
  "FEATURE STORY: Some people arrive as chapters, not conclusions."
];

const poem = [
  "Hindi kita tatanungin kung kailan",
  "dumarating ang taong para sa iyo.",
  "Hindi rin kung bakit hanggang ngayon,",
  "sarili mong pangalan pa rin ang kasunod ng tahimik na gabi.",
  "",
  "Ang itatanong ko lang:",
  "kapag napagod ang boses mong sanay magkuwento,",
  "may mauupuan ba itong katahimikan?",
  "may taong mananatili kahit wala nang kailangang ipaliwanag?",
  "",
  "Dahil baka ang hinahanap natin",
  "ay hindi naman palaging pag-ibig.",
  "Minsan, isang presensya lang —",
  "isang taong kayang magsabi,",
  "‘Sige, pahinga ka muna. Nandito lang ako.’",
  "",
  "At kung wala pa siya,",
  "hindi ibig sabihin na kulang ang kuwento.",
  "Baka may pahina lang talagang",
  "hindi pa handang tawagin ang sarili nitong tahanan."
];

const closingLines = [
  "Hindi kailangan ng sagot ngayong gabi.",
  "Minsan sapat nang may isang tanong na naiwan sa isip.",
  "At minsan, sapat nang may taong nagsabi: ‘Kumusta ka talaga?’"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [headline, setHeadline] = useState(0);
  const [showPoem, setShowPoem] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPostscript, setShowPostscript] = useState(false);
  const [soft, setSoft] = useState(false);

  const current = reflections[index];
  const completed = index >= reflections.length;
  const progress = Math.min((index / reflections.length) * 100, 100);

  const reaction = useMemo(() => {
    if (selected === null) return "Walang pressure. Pili ka lang ng sagot na pinaka-malapit sa isip mo.";
    return [
      "Noted. Hindi verdict ang sagot; starting point lang.",
      "Fair. May mga bagay talagang hindi black-and-white.",
      "That answer left a little room for life to surprise you.",
      "The newsroom respects the mysterious answer. 😭"
    ][selected] ?? "Interesting answer.";
  }, [selected]);

  function next() {
    if (selected === null) return;
    setIndex((v) => v + 1);
    setSelected(null);
    setHeadline((v) => (v + 1) % headlines.length);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setHeadline(0);
    setShowPostscript(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className={soft ? "site soft" : "site"}>
      <div className="noise" />

      <header className="topbar" id="top">
        <a className="masthead" href="#top">
          <span className="mark">SN</span>
          <span><b>SIR OWEN // SPECIAL COLUMN</b><small>THE QUESTIONS WE USUALLY LEAVE UNSAID</small></span>
        </a>
        <span className="issue">ISSUE 05 · REFLECTION EDITION</span>
        <nav><a href="#whatif">What If</a><a href="#poem">Poem</a><a href="#letter">Letter</a></nav>
      </header>

      <section className="hero">
        <div className="stamp">NOT A TEST · NOT AN EVALUATION</div>
        <div>
          <p className="eyebrow">A VERY UNOFFICIAL LITERARY INTERVENTION</p>
          <h1>Sir, what if <span>the question</span><em>isn't about love?</em></h1>
          <p className="lead">Baka hindi naman talaga namin gustong malaman kung may jowa ka. Baka gusto lang naming malaman kung ano ang mga bagay na napapansin ng isang taong sanay tumingin sa buhay nang mas malalim kaysa sa headline.</p>
          <div className="actions">
            <a className="solid" href="#whatif">Basahin ang unang tanong →</a>
            <button className="ghost" onClick={() => setSoft((v) => !v)}>{soft ? "Balik sa original tone" : "Mas tahimik na mode"}</button>
          </div>
        </div>
        <aside className="hero-note">
          <span>TODAY'S NOTE</span>
          <p>“May mga taong okay mag-isa. May mga taong gusto pa ring may kasamang uuwian. Puwedeng parehong totoo.”</p>
          <small>— editorial desk, after overthinking</small>
        </aside>
      </section>

      <section className="ticker">
        <span>DEVELOPING STORY</span><p>{headlines[headline]}</p>
        <button onClick={() => setHeadline((v) => (v + 1) % headlines.length)}>next ↗</button>
      </section>

      <section className="whatif" id="whatif">
        <div className="section-head">
          <div><span className="no">01</span><div><p className="eyebrow">THE WHAT-IF FILE</p><h2>Hindi answer sheet. Mirror lang.</h2></div></div>
          <small>{completed ? "FILE CLOSED" : `${String(index + 1).padStart(2, "0")} / ${String(reflections.length).padStart(2, "0")}`}</small>
        </div>
        <div className="progress"><span style={{ width: `${Math.max(progress, 6)}%` }} /></div>

        {!completed ? (
          <article className="reflection-card">
            <div className="meta"><span>{current.no}</span><span>{current.label}</span><span>READ SLOWLY</span></div>
            <p className="question">{current.question}</p>
            <div className="choices">
              {current.choices.map((choice, i) => (
                <button key={choice} className={selected === i ? "choice selected" : "choice"} onClick={() => setSelected(i)}>
                  <span>{String.fromCharCode(65 + i)}</span><b>{choice}</b><i>↗</i>
                </button>
              ))}
            </div>
            <div className={selected === null ? "reaction" : "reaction show"}><span>AFTER-THOUGHT</span><p>{reaction}</p></div>
            <div className="mirror"><span>THE MIRROR LINE</span><p>{current.mirror}</p></div>
            <div className="card-bottom"><small>Hindi kailangang seryosohin ang sagot. Pero baka seryosohin mo ang tanong.</small><button className="solid small" disabled={selected === null} onClick={next}>{index === reflections.length - 1 ? "Turn the last page →" : "Next thought →"}</button></div>
          </article>
        ) : (
          <article className="closing">
            <span className="closing-tag">FINAL PAGE</span>
            <h3>Okay, Sir. Baka hanggang dito muna.</h3>
            <p>Hindi namin gustong bigyan ka ng sagot. Gusto lang naming iwan sa iyo ang ilang tanong na puwedeng balikan kahit wala nang website, wala nang choices, at wala nang “next.”</p>
            <div className="closing-lines">{closingLines.map((line) => <p key={line}>{line}</p>)}</div>
            <div className="actions"><button className="solid" onClick={() => setShowPostscript(true)}>May pahabol pa ↓</button><button className="ghost light" onClick={restart}>Simulan ulit</button></div>
          </article>
        )}
      </section>

      <section className="literary" id="poem">
        <article className="poem-card">
          <p className="eyebrow">02 · SPECIAL INSERT</p>
          <div className="poem-head"><span>FOR THE WRITER</span><span>ORIGINAL POEM</span></div>
          <h2>Sa mga gabing<br/>walang headline.</h2>
          <p className="intro">Para sa taong sanay maghanap ng tamang salita para sa ibang tao.</p>
          <button className="solid" onClick={() => setShowPoem((v) => !v)}>{showPoem ? "Itikom muna ang pahina ↑" : "Buksan ang tula ↓"}</button>
          {showPoem && <div className="poem-body">{poem.map((line, i) => line ? <p key={`${i}-${line}`}>{line}</p> : <div className="gap" key={`gap-${i}`} />)}<small>— a page left open on purpose</small></div>}
        </article>

        <article className="letter-card" id="letter">
          <p className="eyebrow">03 · PERSONAL NOTE</p>
          <span className="letter-line" />
          <h2>What if the joke was also a thank-you?</h2>
          <p>Sa dami ng deadlines, klase, balita, at salitang kailangang ayusin, baka okay lang ding may isang page na ang goal ay mangulit nang kaunti — at mag-iwan ng tawa at thought.</p>
          <button className="ghost" onClick={() => setShowLetter((v) => !v)}>{showLetter ? "Itago ang liham" : "Buksan ang liham"}</button>
          {showLetter && <div className="letter-body">
            <p>Hindi ito panghihimasok sa personal na buhay mo. Hindi rin ito pagtatangkang sabihin kung ano ang dapat mong piliin. Playful way lang ito ng pagsabi na sana may mga araw ding may puwang para sa iyo — para magpahinga, tumawa, magsulat, at magsabi ng totoong “okay lang” o “hindi ako okay.”</p>
            <p>At kung may problemang gusto mo lang ikuwento someday, may isang Grade 12 ICT student na kayang makinig bilang kaibigan — walang panghuhusga, walang pilitang advice, at walang expectation na kailangan mong maging strong palagi.</p>
          </div>}
        </article>
      </section>

      <section className="friend">
        <div>
          <p className="eyebrow">04 · THE SMALL PROMISE</p>
          <h2>Hindi kami counselor.<br/><em>Kaibigan lang.</em></h2>
          <p className="friend-lead">May mga problema na kailangan ng tamang taong may training. Pero may mga araw ding ang kailangan lang ng isang taong marunong makinig. Hindi para ayusin ka. Hindi para husgahan ka. Para lang hindi mo kailangang dalhin mag-isa ang lahat ng gusto mong ikuwento.</p>
          <div className="signature"><strong>Jerosh Nevado</strong><span>Grade 12 ICT</span></div>
        </div>
        <aside className="friend-card">
          <span>TO SIR OWEN</span>
          <p>“Sir, hindi namin kailangang malaman lahat. Pero kapag gusto mong magsabi ng problema, may estudyanteng kayang makinig nang walang judgment.”</p>
          <small>Open door. Clear boundaries. No pressure.</small>
        </aside>
      </section>

      {showPostscript && <section className="postscript"><p className="eyebrow">POSTSCRIPT</p><h2>Maybe the real what-if is simple.</h2><p>What if a teacher finds out that one of his students didn't just see the teacher — he also saw the person underneath the title?</p><p className="final-line">And maybe that is enough to make someone stop, smile, and think.</p></section>}

      <footer className="footer"><div><b>SIR OWEN · REFLECTION EDITION</b><span>Playful literary page · no tracking · no grades · no answer key</span></div><div className="footer-right"><span>Made with too many “what ifs”</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
