var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: dark"},{"#":"author: Svartviken <svartvikenrp@gmail.com>"},{"->":"Fredag.Kl0326"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Rulla":[{"temp=":"malvarde"},{"temp=":"tarningar"},["ev",{"VAR?":"tarningar"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev","~ret",{"->":"Rulla.5"},null]}],["ev",1,10,"rnd",{"VAR?":"malvarde"},"<=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",1,{"VAR?":"tarningar"},1,"-",{"VAR?":"malvarde"},{"f()":"Rulla"},"+","/ev","~ret","\n",{"->":"Rulla.5"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"tarningar"},1,"-",{"VAR?":"malvarde"},{"f()":"Rulla"},"/ev","~ret","\n",{"->":"Rulla.5"},null]}],"nop","\n",{"#f":1}],"SlaAlexUppmarksamhet":["ev",{"VAR?":"AlexUppmarksamhet"},{"VAR?":"AlexKyla"},{"f()":"Rulla"},"/ev","~ret","\n",{"#f":1}],"Fredag":[{"->":".^.Kl0326"},{"Kl0326":[["ev",{"VAR?":"fredag"},"/ev",{"VAR=":"Dag","re":true},"ev",{"list":{"Familjen.Kim":1,"Familjen.Alex":2}},"/ev",{"VAR=":"ISovrummet","re":true},"ev",{"VAR?":"natt"},"/ev",{"VAR=":"TidPaDagen","re":true},["^Du vaknar med en tryckande känsla i bröstet. Någonting är   fel. Det är mörkt i rummet. ",{"->":".^.Kl0326_Alternativ"},"\n",["ev","str","^Titta på väckarklockan","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Känn efter om Kim ligger kvar i sängen","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Kliv upp","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^Du trycker på väckarklockans stora knapp och tiden lyser ilsket upp i rött","\n","^03:26 ",{"#":"CLASS: klocka"},"\n",{"->":".^.^"},{"->":".^.^.^.^.g-1"},{"#f":5}],"c-1":["\n","^Du sträcker försiktigt ut din hand och känner efter Kims välbekanta form. Hon är varm och andas tungt, djupt försjunken i sömn. ",{"->":".^.^"},"\n",{"->":".^.^.^.^.g-1"},{"#f":5}],"c-2":["\n",{"->":".^.^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"Kl0326_Alternativ"}],{"#f":5,"#n":"g-0"}],{"g-1":["^Du kliver upp ur sängen och förundras över hur tyst det är när alla sover.","\n","ev",{"VAR?":"ISovrummet"},{"VAR?":"Alex"},"-","/ev",{"VAR=":"ISovrummet","re":true},["ev","str","^Titta till Robin","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Titta till Mio","/str","/ev",{"*":".^.c-4","flg":20},"ev","str","^Titta till Felicia","/str","/ev",{"*":".^.c-5","flg":20},{"c-3":["\n","^Robin sover ","ev",{"CNT?":".^.^.c-4"},"/ev",[{"->":".^.b","c":true},{"b":["^också ",{"->":".^.^.^.6"},null]}],"nop","^gott i sin säng med Copernicus sovand i fotänden","ev",{"CNT?":".^.^.c-4"},"!","/ev",[{"->":".^.b","c":true},{"b":["^, precis som vanligt",{"->":".^.^.^.13"},null]}],"nop","^. ",{"->":".^.^"},"\n",{"->":".^.^.^.^.Felicia_borta"},{"#f":5}],"c-4":["\n","^Mio sover ","ev",{"CNT?":".^.^.c-3"},"/ev",[{"->":".^.b","c":true},{"b":["^också ",{"->":".^.^.^.6"},null]}],"nop","^gott i sin säng. På nattduksbordet ligger hennes mobiltelefon och blinkar regelbundet med sitt grön notifikationsljus. ",{"->":".^.^"},"\n",{"->":".^.^.^.^.Felicia_borta"},{"#f":5}],"c-5":["\n","^Du smyger försiktigt upp dörren till Felicias rum och tittar in. Täcket på sängen är nedhasat till fotänden men Felicia syns inte till.","\n",{"->":".^.^.^.^.Felicia_borta"},{"#f":5}],"#f":5,"#n":"del1_alternativ"}],{"#f":5}],"Felicia_borta":["^Du tittar panikslaget runt i rummet och märker omedelbart att både Felicia och hennes hink med leksaker, som hon insisterade ha stående bredvid sin säng, är försvunna.","\n","ev","str","^Spring ut i vardagsrummet","/str","/ev",{"*":".^.c-6","flg":20},{"c-6":["\n","^Du tar dig snabbt ut i vardagsrummet men ser inte heller något spår av Felicia där.","\n","^Du inser att hon måste ha gått ut. Kanske ner till sjön.","\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["ev","str","^Rusa ut ur huset","/str","/ev",{"*":".^.c-7","flg":20},{"c-7":["\n","^Du öppnar dörren ner mot sjön och ser Ulrika, er närmsta granne, stående där i småregnet, just på väg att knacka på, och i handen håller Felicia.","\n",{"->":".^.^.^.Felicia_hemma_igen"},{"#f":5}],"#f":5}],"Felicia_hemma_igen":["^Felicia är klädd i sin pyjamas som nu är blöt och lerig, på fötterna har hon sina gummistövlar och hinken med leksaker syns inte till.","\n","ev","str","^Titta på Ulrika","/str","/ev",{"*":".^.c-8","flg":20},{"c-8":["\n","^Ulrika är iklädd ett nattlinne och morgonrock","<>","\n","ev",{"f()":"SlaAlexUppmarksamhet"},1,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^, runt hennes hals hänger en tunn kedja med en gammal nyckel.","\n","ev",{"VAR?":"AlexVet"},{"VAR?":"SettUlrikasNyckel"},"+","/ev",{"VAR=":"AlexVet","re":true},{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^.","\n",{"->":".^.^.^.11"},null]}],"nop","\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^Ulrika berättar hur hon hittade Felicia gående bland husen.","\n","ev","str","^Fråga Felicia vad hon gjorde ute","/str","/ev",{"*":".^.c-9","flg":20},{"c-9":["\n","^Du hukar dig försiktigt ner och tittar Felicia i ögonen, \"Vad gjorde du ute så här sent Felicia?\"","\n","^Hon tittar ner i marken och är absolut inte intresserad av att svara.","\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["ev","str","^Fråga Ulrika om hon vill komma in","/str","/ev",{"*":".^.c-10","flg":20},"ev","str","^Ta Felicias hand och tacka Ulrika för hjälpen","/str","/ev",{"*":".^.c-11","flg":20},{"c-10":["\n","^\"Vill du komma in och låna en handduk, Ulrika?\"","\n","^Hon ler, \"Tack så mycket men jag ska nog gå hem till mig innan Gunnar blir orolig.\"","\n",{"->":".^.^.^.g-5"},{"#f":5}],"c-11":["\n","^Du tar Felicias hand och leder in henne i huset.","\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^Ulrika vinkar lätt och börjar gå ner för trappan, men innan du stängt dörren vänder hon sig om och lägger till, \"Hoppas ni får sova gott och att lilla Felicia inte blir förkyld nu. Kom gärna över på fika imorgon så jag vet att flickstackarn mår bra!\"","\n",["ev","str","^Hämta en handduk till Felicia","/str","/ev",{"*":".^.c-12","flg":20},{"c-12":["\n","^Felicia ser trött och och det är inga problem att leda henne in i badrummet där ni snabbt tar av den blöta pyjamasen och hon torkar av sig med en torr handduk utan gnäll.","\n",{"->":".^.^.^.^.g-7"},{"#f":5}],"#f":5,"#n":"g-6"}],{"#f":5}],"g-7":["ev","str","^Följ med Felicia in till sovrummet","/str","/ev",{"*":".^.c-13","flg":20},{"c-13":["\n","^Du följer med Felicia till sovrummet, när hon lagt sig i sängen sätter du dig på sängkanten.","\n",{"->":".^.^.^.fraga_ut_felicia"},{"#f":5}],"#f":5}],"fraga_ut_felicia":[["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-14","flg":18},{"s":["^\"Vad gjorde du ute så här sent Felicia?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-14"},"/ev",{"*":".^.^.c-15","flg":19},{"s":["^\"Vad är det för kompisar?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-14"},{"CNT?":".^.^.c-15"},"&&",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-15"},"turns",2,"<","&&","/ev",{"*":".^.^.c-16","flg":19},{"s":["^\"Vad menar du, bara leka på natten?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-14"},"/ev",{"*":".^.^.c-17","flg":19},{"s":["^\"Har du sett dem här tidigare?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-14"},"/ev",{"*":".^.^.c-18","flg":19},{"s":["^\"Kan du beskriva hur de ser ut?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-17"},"/ev",{"*":".^.^.c-19","flg":19},{"s":["^\"Men var kommer de ifrån när du leker med dem då?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-19"},"/ev",{"*":".^.^.c-20","flg":19},{"s":["^\"Såg Ulrika barnen?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-14"},"!",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-14"},"turns",2,">","||","/ev",{"*":".^.^.c-21","flg":19},{"s":["^\"Sov så gott så får vi prata mer om det här imorgon.\"",{"->":"$r","var":true},null]}],{"c-14":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-14.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^, fragar du varsamt.","\n","^Hon svarar, \"Jag ville bara leka med mina nya kompisar.\" ",{"->":".^.^"},"\n",{"#f":7}],"c-15":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-15.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"Dom är jättenälla, men de vill bara leka på natten.\" ",{"->":".^.^"},"\n",{"#f":7}],"c-16":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-16.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^, säger du med orolig röst. ",{"->":".^.^"},"\n",{"#f":5}],"c-17":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-17.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^, du känner en olustig känsla.","\n","^\"Nej, jag vet inte var de kommer ifrån, de är bara ute på natten.\", säger hon. ",{"->":".^.^"},"\n",{"#f":5}],"c-18":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-18.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^\"Som vanliga barn, det är svårt att se när det är så mörkt\" ",{"->":".^.^"},"\n",{"#f":5}],"c-19":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-19.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"AlexVet"},{"VAR?":"FeliciasKompisarBorPaStranden"},"+","/ev",{"VAR=":"AlexVet","re":true},"^\"De bor på stranden, de var där när jag kom dit och de var kvar när jag gick hem.\" ",{"->":".^.^"},"\n",{"#f":5}],"c-20":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-20.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^\"Nej, jag träffade henne när jag gick hem.\" ",{"->":".^.^"},"\n",{"#f":5}],"c-21":["ev",{"^->":"Fredag.Kl0326.0.fraga_ut_felicia.c-21.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^, säger du ömsint och bäddar om Felicia.","\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"#f":1}],"global decl":["ev",{"list":{"Dag.fredag":1}},{"VAR=":"Dag"},{"list":{"TidPaDagen.natt":1}},{"VAR=":"TidPaDagen"},{"list":{},"origins":["Familjen"]},{"VAR=":"Familjen"},{"list":{},"origins":["Nycklar"]},{"VAR=":"Nycklar"},{"list":{}},{"VAR=":"IKoket"},{"list":{"Familjen.Kim":1,"Familjen.Alex":2}},{"VAR=":"ISovrummet"},{"list":{}},{"VAR=":"AlexVet"},4,{"VAR=":"AlexKyla"},4,{"VAR=":"AlexUppmarksamhet"},"/ev","end",null],"#f":1}],"listDefs":{"Dag":{"fredag":1},"TidPaDagen":{"natt":1,"morgon":2,"lunch":3,"formiddag":4,"eftermiddag":5,"kvall":6},"Familjen":{"Kim":1,"Alex":2,"Robin":3,"Mio":4,"Felicia":5},"Nycklar":{"SettUlrikasNyckel":1,"FeliciasKompisarBorPaStranden":2}}};