import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RodoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-12 text-center">
              Klauzula RODO
            </h1>

            <div className="prose prose-lg max-w-none font-body text-gray-700 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-[#333333] mt-10 mb-4">
                Informacja dotycząca przetwarzania danych osobowych kontrahentów i reprezentantów
              </h2>
              <p>
                Administratorem danych osobowych jest Miłosz Wein, prowadzący działalność gospodarczą pod firmą Miłosz Wein Smart Marketing, ul. Zaciszna 2/26 86-300 Grudziądz NIP: 8762473623. Kontakt z administratorem w sprawach dotyczących przetwarzania danych osobowych: <a href="mailto:info@agencjasmart.marketing">info@agencjasmart.marketing</a>.
              </p>
              <p>
                Niniejsza informacja dotyczy Ciebie, jeśli jesteś:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>moim kontrahentem, będącym osobą fizyczną, co oznacza, że zawarłam z Tobą umowę zlecenia, umowę o współpracy, umowę o świadczenie przez Ciebie na moją rzecz usług lub inną podobną umowę (dalej będę Cię określać <strong>„Kontrahentem”</strong>);</li>
                <li>osobą reprezentującą, pracownikiem lub współpracownikiem mojego Kontrahenta albo kontrahenta niebędącego osobą fizyczną (czyli np. reprezentujesz spółkę) (dalej będę Cię określać <strong>„Przedstawicielem”</strong>).</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-[#333333] mt-10 mb-4">
                Jeśli jesteś moim Kontrahentem
              </h2>
              <p>
                Twoje dane osobowe przetwarzam w następujących celach i na następujących podstawach prawnych:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>w celu nawiązania lub utrzymywania relacji biznesowych z Tobą, co stanowi mój prawnie uzasadniony interes zgodnie z art. 6 ust. 1 lit. f) RODO[1];</li>
                <li>w celu zawarcia z Tobą umowy i jej wykonywania – na podstawie art. 6 ust. 1 lit. b) RODO, tj. przetwarzanie jest niezbędne do wykonywania umowy lub do podjęcia działań na Twoje żądanie, przed zawarciem umowy;</li>
                <li>w celu dokonania rozliczeń podatkowych i prowadzenia dokumentacji księgowej − na podstawie art. 6 ust. 1 lit. c) RODO, tj. przetwarzanie danych jest niezbędne dla wypełniania przeze mnie obowiązków prawnych wynikających z powszechnie obowiązujących przepisów prawa, w tym przepisów prawa podatkowego oraz przepisów o rachunkowości;</li>
                <li>w celu ustalenia, dochodzenia lub obrony roszczeń, co stanowi mój prawnie uzasadniony interes zgodnie z art. 6 ust. 1 lit. f) RODO;</li>
                <li>w celach marketingowych, tj. przesyłania Tobie informacji handlowych drogą elektroniczną lub kierowania do Ciebie marketingu prze telefon – jeśli wyraziłeś mi na to zgodę zgodnie z art. 6 ust. 1 lit. a RODO oraz zgodnie z art. 10 ustawy o świadczeniu usług drogą elektroniczną lub art. 172 ustawy Prawo telekomunikacyjne.</li>
              </ul>
              <p>
                Podanie przez Ciebie danych osobowych w zakresie wymaganym przez przepisy prawa (np. w celu wystawienia faktury lub innego dokumentu księgowego) jest obowiązkowe i wynika z przepisów prawa podatkowego i przepisów o rachunkowości. Podanie danych osobowych w celach marketingowych jest całkowicie dobrowolne. Podanie danych osobowych w pozostałym zakresie jest dobrowolne, przy czym niezbędne do zawarcia i wykonywania umowy i nawiązania relacji biznesowych. Niepodanie danych osobowych skutkuje niemożliwością zawarcia i wykonywania powyższej umowy, jak również utrzymywania relacji biznesowych.
              </p>
              <p>
                Twoje dane osobowe są przetwarzane przez okres niezbędny do realizacji celów wskazanych powyżej, w szczególności przez okres utrzymywania relacji biznesowych i realizacji zawartej umowy, a następnie będą przeze mnie przechowywane do momentu przedawnienia roszczeń lub do momentu wygaśnięcia obowiązku przechowywania danych wynikającego z przepisów prawa (np. prawa podatkowego). Dane osobowe przetwarzane na podstawie zgody będą przechowywane do momentu jej cofnięcia.
              </p>

              <h2 className="font-heading text-2xl font-bold text-[#333333] mt-10 mb-4">
                Jeśli jesteś Przedstawicielem
              </h2>
              <p>
                Twoje dane osobowe otrzymuję od mojego kontrahenta, którego reprezentujesz lub z którym współpracujesz albo sam przekazujesz mi te dane w związku z zawarciem i wykonaniem umowy łączącej mnie z tym kontrahentem.
              </p>
              <p>Przetwarzam następujące kategorie Twoich danych osobowych:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>jeśli reprezentujesz mojego kontrahenta – dane identyfikacyjne (np. imiona, nazwiska, nazwę podmiotu, który reprezentujesz, nazwę stanowiska/nazwę pełnionej funkcji), dane dotyczące udzielonego umocowania (np. data udzielonego umocowania, rodzaj i zakres udzielonego umocowania);</li>
                <li>jeśli jesteś pracownikiem lub współpracownikiem mojego kontrahenta – dane identyfikacyjne (np. imiona, nazwiska, nazwę podmiotu, który Cię zatrudnia nazwę stanowiska/nazwę pełnionej funkcji, zakres spraw, którymi się zajmujesz), dane kontaktowe (np. numer służbowego telefonu, email).</li>
              </ul>
              <p>
                Twoje dane osobowe przetwarzam w następujących celach i na następujących podstawach prawnych:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>w celu zawarcia umowy pomiędzy kontrahentem a mną i jej wykonywania, a w szczególności weryfikacji Twojego umocowania do zawarcia umowy w imieniu kontrahenta oraz kontaktu z Tobą jako osobą kontaktową w związku z wykonywaniem umowy – na podstawie art. 6 ust. 1 lit. f) RODO, tj. na podstawie prawnie uzasadnionego interesu realizowanego zarówno przeze mnie, jak i mojego kontrahenta, którym jest umożliwienie nam sprawnego bieżącego wykonywania umowy oraz umożliwienie weryfikacji Twojego umocowania do zawarcia umowy w imieniu kontrahenta;</li>
                <li>w celu dokonania rozliczeń podatkowych i prowadzenia dokumentacji księgowej − na podstawie art. 6 ust. 1 lit. c) RODO, tj. przetwarzanie danych jest niezbędne dla wypełniania obowiązków prawnych ciążących na Administratorze, a wynikających z powszechnie obowiązujących przepisów prawa, w tym przepisów prawa podatkowego oraz przepisów o rachunkowości;</li>
                <li>w celu ustalenia, dochodzenia lub obrony roszczeń pomiędzy kontrahentem a mną – na podstawie art. 6 ust. 1 lit. f) RODO, tj. przetwarzanie jest niezbędne do celów wynikających z moich prawnie uzasadnionych interesów, polegających możliwości ustalenia, dochodzenia lub obrony roszczeń);</li>
                <li>w celu nawiązania lub utrzymywania relacji biznesowych z kontrahentem, za Twoim pośrednictwem, co stanowi mój prawnie uzasadniony zgodnie z art. 6 ust. 1 lit. f) RODO;</li>
                <li>w celach marketingowych, tj. przesyłania Tobie informacji handlowych drogą elektroniczną lub kierowania do Ciebie marketingu prze telefon – jeśli wyraziłeś mi na to zgodę zgodnie z art. 6 ust. 1 lit. a RODO oraz zgodnie z art. 10 ustawy o świadczeniu usług drogą elektroniczną lub art. 172 ustawy Prawo telekomunikacyjne.</li>
              </ul>
              <p>
                Jeśli przekazujesz mi swoje dane osobowe bezpośrednio, jest to dobrowolne, przy czym niezbędne do zawarcia i wykonywania umowy i nawiązania relacji biznesowych. Niepodanie danych osobowych skutkuje niemożliwością zawarcia i wykonywania powyższej umowy, jak również utrzymywania relacji biznesowych. Podanie danych osobowych w celach marketingowych jest całkowicie dobrowolne.
              </p>
              <p>
                Twoje dane osobowe są przetwarzane przez okres niezbędny do realizacji celów wskazanych powyżej, w szczególności przez okres utrzymywania relacji biznesowych i realizacji umowy zawartej z moim kontrahentem, a następnie będą przeze mnie przechowywane do momentu przedawnienia roszczeń lub do momentu wygaśnięcia obowiązku przechowywania danych wynikającego z przepisów prawa (np. prawa podatkowego). Dane osobowe przetwarzane na podstawie zgody będą przechowywane do momentu jej cofnięcia.
              </p>

              <h2 className="font-heading text-2xl font-bold text-[#333333] mt-10 mb-4">
                Pozostałe informacje dotyczące przetwarzania danych osobowych Kontrahentów i Przedstawicieli
              </h2>
              <p>
                Twoje dane osobowe są ujawniane następującym podmiotom:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>udzielającym mi wsparcia na zasadzie zleconych usług i zgodnie z zawartymi umowami powierzenia, tj. podmiotom świadczącym usługi informatyczne, księgowe, prawne marketingowe, administracyjne, w zakresie poczty elektronicznej;</li>
                <li>podmiotom świadczącym usługi pocztowe, kurierskie;</li>
                <li>upoważnionym do przetwarzania danych osobowych na podstawie przepisów prawa.</li>
              </ul>
              <p>
                W związku z korzystanie z usług Facebooka, Instagrama, Linkedin oraz TIktoka Twoje dane osobowe mogą być przekazywane poza Europejski Obszar Gospodarczy na podstawie standardowych klauzul umownych. Nie zamierzam wobec Ciebie podejmować decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu danych osobowych, w tym profilowaniu.
              </p>
              <p>
                W związku z przetwarzaniem Twoich danych osobowych masz prawo do:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia ich przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych (w przypadku gdy przetwarzanie jest niezbędne dla wypełnienia celów wynikających z prawnie uzasadnionych interesów),</li>
                <li>przeniesienia danych osobowych (gdy przetwarzanie danych osobowych odbywa się w sposób zautomatyzowany na podstawie zgody lub umowy),</li>
                <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, które miało miejsce na podstawie zgody przed jej cofnięciem.</li>
              </ul>
              <p>
                Skorzystanie z powyższych praw jest możliwe poprzez złożenie oświadczenia mailowo na adres e-mail: <a href="mailto:info@agencjasmart.marketing">info@agencjasmart.marketing</a>.
              </p>
              <p>
                Masz również prawo do wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych, tj. Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa (szczegółowe informacje, jak złożyć skargę, można znaleźć tutaj: <a href="https://uodo.gov.pl/pl/83/155" target="_blank" rel="noopener noreferrer">https://uodo.gov.pl/pl/83/155</a>), jeśli uznasz, że przetwarzanie danych narusza RODO.
              </p>
              <p className="text-sm">
                [1] Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}