# theme: dark
# author: Svartviken <svartvikenrp@gmail.com>

-> Fredag.Kl0326

LIST Dag = (fredag)
LIST TidPaDagen = (natt), morgon, lunch, formiddag, eftermiddag, kvall
LIST Familjen = Kim, Alex, Robin, Mio, Felicia
LIST Nycklar = SettUlrikasNyckel, FeliciasKompisarBorPaStranden

VAR IKoket = ()
VAR ISovrummet = (Kim, Alex)
VAR AlexVet = ()

VAR AlexKyla = 4
VAR AlexUppmarksamhet = 4

== function Rulla(tarningar, malvarde)
    {
        - tarningar == 0: ~ return 0
        - RANDOM(1, 10) <= malvarde: ~ return 1 + Rulla(tarningar - 1, malvarde)
        - else: ~ return Rulla(tarningar - 1, malvarde)
    }

== function SlaAlexUppmarksamhet()
    ~ return Rulla(AlexUppmarksamhet, AlexKyla)

=== Fredag ===

= Kl0326
~ Dag = fredag
~ ISovrummet = (Kim, Alex)
~ TidPaDagen = natt
- Du vaknar med en tryckande känsla i bröstet. Någonting är   fel. Det är mörkt i rummet. -> Kl0326_Alternativ
- (Kl0326_Alternativ)
  * [Titta på väckarklockan]
    Du trycker på väckarklockans stora knapp och tiden lyser ilsket upp i rött
    03:26 # CLASS: klocka
    -> Kl0326_Alternativ
  * [Känn efter om Kim ligger kvar i sängen]
    Du sträcker försiktigt ut din hand och känner efter Kims välbekanta form. Hon är varm och andas tungt, djupt försjunken i sömn. -> Kl0326_Alternativ
  * [Kliv upp]
- Du kliver upp ur sängen och förundras över hur tyst det är när alla sover.
  ~ ISovrummet = ISovrummet - Alex
- (del1_alternativ)
  * (robin_sover) [Titta till Robin]
    Robin sover {mio_sover:också }gott i sin säng med Copernicus sovand i fotänden{ not mio_sover:, precis som vanligt}. -> del1_alternativ
  * (mio_sover) [Titta till Mio]
    Mio sover {robin_sover:också }gott i sin säng. På nattduksbordet ligger hennes mobiltelefon och blinkar regelbundet med sitt grön notifikationsljus. -> del1_alternativ
  * [Titta till Felicia]
    Du smyger försiktigt upp dörren till Felicias rum och tittar in. Täcket på sängen är nedhasat till fotänden men Felicia syns inte till.
- (Felicia_borta)
  Du tittar panikslaget runt i rummet och märker omedelbart att både Felicia och hennes hink med leksaker, som hon insisterade ha stående bredvid sin säng, är försvunna.
  * [Spring ut i vardagsrummet]
    Du tar dig snabbt ut i vardagsrummet men ser inte heller något spår av Felicia där.
    Du inser att hon måste ha gått ut. Kanske ner till sjön.
-
  * [Rusa ut ur huset]
    Du öppnar dörren ner mot sjön och ser Ulrika, er närmsta granne, stående där i småregnet, just på väg att knacka på, och i handen håller Felicia.
- (Felicia_hemma_igen)
  Felicia är klädd i sin pyjamas som nu är blöt och lerig, på fötterna har hon sina gummistövlar och hinken med leksaker syns inte till.
  * [Titta på Ulrika]
    Ulrika är iklädd ett nattlinne och morgonrock<>
    { SlaAlexUppmarksamhet() >= 1:
    , runt hennes hals hänger en tunn kedja med en gammal nyckel.
    ~ AlexVet = AlexVet + SettUlrikasNyckel
    - else:
    .
    }
-
  Ulrika berättar hur hon hittade Felicia gående bland husen.
  * [Fråga Felicia vad hon gjorde ute]
    Du hukar dig försiktigt ner och tittar Felicia i ögonen, "Vad gjorde du ute så här sent Felicia?"
    Hon tittar ner i marken och är absolut inte intresserad av att svara.
-
  * [Fråga Ulrika om hon vill komma in]
    "Vill du komma in och låna en handduk, Ulrika?"
    Hon ler, "Tack så mycket men jag ska nog gå hem till mig innan Gunnar blir orolig." 
  * [Ta Felicias hand och tacka Ulrika för hjälpen]
    Du tar Felicias hand och leder in henne i huset.
-
  Ulrika vinkar lätt och börjar gå ner för trappan, men innan du stängt dörren vänder hon sig om och lägger till, "Hoppas ni får sova gott och att lilla Felicia inte blir förkyld nu. Kom gärna över på fika imorgon så jag vet att flickstackarn mår bra!"
-
  * [Hämta en handduk till Felicia]
    Felicia ser trött och och det är inga problem att leda henne in i badrummet där ni snabbt tar av den blöta pyjamasen och hon torkar av sig med en torr handduk utan gnäll.
-
  * [Följ med Felicia in till sovrummet]
    Du följer med Felicia till sovrummet, när hon lagt sig i sängen sätter du dig på sängkanten.
- (fraga_ut_felicia)
  * (f1) "Vad gjorde du ute så här sent Felicia?"[], fragar du varsamt.
    Hon svarar, "Jag ville bara leka med mina nya kompisar." -> fraga_ut_felicia 
  * (f2) {f1} "Vad är det för kompisar?"[]
    "Dom är jättenälla, men de vill bara leka på natten." -> fraga_ut_felicia
  * (f3) {f1} {f2} {TURNS_SINCE(->f2) < 2} "Vad menar du, bara leka på natten?"[], säger du med orolig röst. -> fraga_ut_felicia
  * (f4) {f1} "Har du sett dem här tidigare?"[], du känner en olustig känsla.
    "Nej, jag vet inte var de kommer ifrån, de är bara ute på natten.", säger hon. -> fraga_ut_felicia
  * (f5) {f1} "Kan du beskriva hur de ser ut?"
    "Som vanliga barn, det är svårt att se när det är så mörkt" -> fraga_ut_felicia
  * (f6) {f4} "Men var kommer de ifrån när du leker med dem då?"
    ~ AlexVet = AlexVet + FeliciasKompisarBorPaStranden
    "De bor på stranden, de var där när jag kom dit och de var kvar när jag gick hem." -> fraga_ut_felicia
  * {f6} "Såg Ulrika barnen?"
    "Nej, jag träffade henne när jag gick hem." -> fraga_ut_felicia
  * {!f1 || TURNS_SINCE(->f1) > 2} "Sov så gott så får vi prata mer om det här imorgon."[], säger du ömsint och bäddar om Felicia.

-> END