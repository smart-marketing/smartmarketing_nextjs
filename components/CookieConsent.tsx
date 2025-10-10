'use client';

import { useState, useEffect } from 'react';
import { X, Shield, Settings, CheckCircle2 } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true, // Domyślnie zaznaczone
    marketing: true, // Domyślnie zaznaczone
  });

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Opóźnienie 1s dla lepszego UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Załaduj zapisane preferencje i aktywuj skrypty
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      activateScripts(savedPreferences);
    }
  }, []);

  const activateScripts = (prefs: CookiePreferences) => {
    // GTM
    if (prefs.analytics || prefs.marketing) {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KNDWCJVR');
      `;
      document.head.appendChild(script);

      // GTM noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNDWCJVR" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
      document.body.insertBefore(noscript, document.body.firstChild);
    }

    // Możesz dodać więcej skryptów w zależności od kategorii
    if (prefs.marketing) {
      // Facebook Pixel
      // Meta Pixel Code tutaj
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    activateScripts(allAccepted);
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    activateScripts(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay zasłaniający treść */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]" />

      {/* Banner */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in duration-500">
          {/* Header z gradientem firmowym */}
          <div className="bg-gradient-to-r from-[#C11369] via-[#E02B77] to-[#049FE3] p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24" />
            <div className="relative flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading">
                  🍪 Twoja prywatność
                </h2>
                <p className="text-white/90 text-sm mt-1">
                  Ty decydujesz, my szanujemy
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {!showSettings ? (
              <>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                  Używamy cookies aby zapewnić najlepsze doświadczenia, analizować ruch i personalizować treści. 
                    Możesz zaakceptować wszystkie cookies lub dostosować ustawienia według własnych preferencji.
                </p>

                {/* Przyciski - zmieniona kolejność */}
                <div className="flex flex-col-reverse sm:flex-row gap-3">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 bg-white hover:bg-gray-50 text-[#333333] font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300"
                  >
                    <Settings className="w-5 h-5" />
                    Dostosuj
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-to-r from-[#C11369] to-[#049FE3] hover:from-[#a00f57] hover:to-[#0389c9] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    Akceptuj wszystkie
                  </button>
                </div>

                <button
                  onClick={handleRejectAll}
                  className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors py-2"
                >
                  Tylko niezbędne cookies
                </button>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  Klikając "Akceptuj wszystkie cookies", wyrażasz zgodę na przechowywanie plików cookie 
                  na Twoim urządzeniu w celu poprawy nawigacji, analizy użytkowania witryny i wsparcia 
                  naszych działań marketingowych. 
                  <a href="/polityka-prywatnosci" className="text-[#C11369] hover:underline ml-1">
                    Polityka prywatności
                  </a>
                </p>
              </>
            ) : (
              <>
                {/* Panel ustawień */}
                <div className="space-y-4 mb-6">
                  {/* Niezbędne */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        🔒 Niezbędne cookies
                      </h3>
                      <p className="text-sm text-gray-600">
                        Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Analityczne - domyślnie włączone */}
                  <div className="flex items-start justify-between p-4 bg-gradient-to-br from-[#049FE3]/5 to-[#C11369]/5 rounded-xl border border-[#049FE3]/20">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                        📊 Analityczne cookies
                        <span className="text-xs font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">Aktywne</span>
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3]' : 'bg-gray-300'
                      }`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${
                          preferences.analytics ? 'right-1' : 'left-1'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketingowe - domyślnie włączone */}
                  <div className="flex items-start justify-between p-4 bg-gradient-to-br from-[#C11369]/5 to-[#049FE3]/5 rounded-xl border border-[#C11369]/20">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                        🎯 Marketingowe cookies
                        <span className="text-xs font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">Aktywne</span>
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pozwalają na wyświetlanie spersonalizowanych reklam.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3]' : 'bg-gray-300'
                      }`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all ${
                          preferences.marketing ? 'right-1' : 'left-1'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all"
                  >
                    Wstecz
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="flex-1 bg-gradient-to-r from-[#C11369] to-[#049FE3] hover:from-[#a00f57] hover:to-[#0389c9] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
                  >
                    Zapisz ustawienia
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}