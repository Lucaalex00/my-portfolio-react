import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ParticlesBg from "particles-bg";
import { Button } from '@mui/material'; // Importazione di Material UI Button
import './HackerTerminal.css'; // File CSS dove aggiungeremo l'animazione glitch

const risposte = {
  help: ["Comandi sbloccati."],
  'restore --portfolio': ["Ripristino in corso... Timer avviato."],
  whoami_machine: ["Sono una macchina. Non puoi comprendermi."],
  whoami_ready: ["Chi sono?", "Bentornato, Operatore."],
  'cut --red': ["Filo rosso tagliato."],
  'cut --blue': ["Filo blu tagliato."],
  default: ["Comando sconosciuto. Digita 'help' per i comandi disponibili."]
};

const suono = (tipo) => {
  // Mappa per associare il tipo al percorso del suono
  const fileSuono = {
    error: '/sounds/Error.mp3',
    success: '/sounds/Success.mp3',
    alert: '/sounds/Alert.mp3',
    loading: '/sounds/Loading.mp3',
  };

  // Controlla se il tipo passato è valido, altrimenti usa 'success' di default
  const percorsoSuono = fileSuono[tipo] || fileSuono.success;

  // Crea l'oggetto Audio e configura il volume
  const audio = new Audio(percorsoSuono);
  audio.volume = 0.2;

  // Avvia il suono
  audio.play();
};

export default function TerminaleHacker() {
  const [righe, setRighe] = useState([]);
  const [input, setInput] = useState('');
  const [pronto, setPronto] = useState(false);
  const [caricamento, setCaricamento] = useState(true);
  const [drawerAperto, setDrawerAperto] = useState(false);
  const [filiTagliati, setFiliTagliati] = useState({ rosso: false, blu: false });
  const [filiControllati, setFiliControllati] = useState(false);
  const filiTagliatiCompletati = filiTagliati.rosso && filiTagliati.blu;
  const [timer, setTimer] = useState(1);
  const [timerAvviato, setTimerAvviato] = useState(false);
  const [timerScaduto, setTimerScaduto] = useState(false);
  const [inputBloccato, setInputBloccato] = useState(false);
  const [menuLaterali, setMenuLaterali] = useState(['help', 'whoami', 'restore --portfolio']);
  const [helpUsato, setHelpUsato] = useState(false);
  const terminalRef = useRef(null);
  const [terminalAvviato, setTerminalAvviato] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timerInizio = setTimeout(() => {
      setRighe(["██ BIOS SYSTEM v3.4.1", "Caricamento della shell sicura...", "Decriptazione dell'interfaccia..."]);
      setTimeout(() => setPronto(true), 2500);
      setCaricamento(false);
    }, 2500);
    return () => clearTimeout(timerInizio);
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [righe]);

  useEffect(() => {
    if (timerAvviato && !timerScaduto) {
      const intervallo = setInterval(() => {
        setTimer((precedente) => {
          if (precedente <= 1) {
            clearInterval(intervallo);
            setTimerScaduto(true);
            setInputBloccato(true);
            return 0;
          }
          return precedente - 1;
        });
      }, 1000);
      return () => clearInterval(intervallo);
    }
  }, [timerAvviato]);

  const sbloccaComando = (cmd) => {
    setMenuLaterali(precedente => precedente.includes(cmd) ? precedente : [...precedente, cmd]);
  };

  const rimuoviComando = (cmd) => {
    setMenuLaterali(precedente => precedente.filter(c => c !== cmd));
  };

  const gestisciComando = (e) => {
    if (e.key === 'Enter' && !inputBloccato) {
      const cmd = input.trim().toLowerCase();
      setRighe(precedente => [...precedente, `> ${cmd}`]);

      if (!menuLaterali.includes(cmd)) {
        suono('error');
        setTimeout(() => setRighe(precedente => [...precedente, risposte.default[0]]), 500);
        setInput('');
        return;
      }

      suono('success');
      
      // Risposta al comando e gestione stato
      switch (cmd) {
        case 'help':
          setDrawerAperto(true);
          if (!helpUsato) {
            setRighe(precedente => [...precedente, risposte.help[0]]);
            setHelpUsato(true);
          }
          break;

        case 'restore --portfolio':
          suono('alert');
          sbloccaComando('cut --red');
          sbloccaComando('cut --blue');
          sbloccaComando('check --wires');
          if (!timerAvviato) {
            setTimerAvviato(true);
            rimuoviComando('restore --portfolio');
          }
          setRighe(precedente => [...precedente, risposte['restore --portfolio'][0]]);
          break;

        case 'cut --red':
          setFiliTagliati(precedente => ({ ...precedente, rosso: true }));
          rimuoviComando('cut --red');
          setRighe(precedente => [...precedente, risposte['cut --red'][0]]);
          break;

        case 'cut --blue':
          setFiliTagliati(precedente => ({ ...precedente, blu: true }));
          rimuoviComando('cut --blue');
          setRighe(precedente => [...precedente, risposte['cut --blue'][0]]);
          break;

        case 'check --wires':
          setRighe(precedente => [...precedente, filiTagliatiCompletati ? "✅ Controllo fili passato." : "❌ Fili non tagliati."]);
          if (filiTagliatiCompletati) {
            rimuoviComando('check --wires');
            sbloccaComando('whoami');
            setFiliControllati(true);
          }
          break;

        case 'whoami': {
          const rispostaWhoami = (filiTagliatiCompletati && filiControllati)
            ? risposte.whoami_ready[0]
            : risposte.whoami_machine[0];
          setRighe(precedente => [...precedente, rispostaWhoami]);
          break;
        }

        case 'reload --force':
          window.location.reload();
          return; // Non dobbiamo aggiungere una risposta per questo comando

        default:
          setRighe(precedente => [...precedente, risposte.default[0]]);
          break;
      }

      setInput('');
    }
  };

  const toggleDrawer = () => setDrawerAperto(!drawerAperto);
  const handleCommandClick = (comando) => {
    setInput(comando);
    if (window.innerWidth < 768) {
      setDrawerAperto(false);
    }
  };

  const avviaTerminale = () => {
    setTerminalAvviato(true); // Imposta il terminale come avviato
    
    // Dopo 2.5 secondi, mostra il contenuto del terminale
    setTimeout(() => {
      setRighe(["██ BIOS SYSTEM v3.4.1", "Caricamento della shell sicura...", "Decriptazione dell'interfaccia..."]);
      setTimeout(() => setPronto(true), 3000);
      
      setCaricamento(false);
    }, 2500); 
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black relative overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} color="#00ff00" num={100} />
      <style>{`
        .particles-bg-canvas-self {
          z-index: 0 !important;
          opacity: 0.5;
          height: 100vh !important;
          position: fixed !important;
          pointer-events: none;
        }
      `}</style>

      {/* Bottone per avviare il terminale */}
      {!terminalAvviato && (
        <div className="absolute flex items-center justify-center w-full h-full z-50">
          <Button
            onClick={() => {
              // Definiamo la logica in una funzione per garantirci che venga eseguita correttamente
              setTimeout(() => {
                suono('loading'); // Esegui il suono di caricamento
              }, 500);
              avviaTerminale(); // Avvia il terminale
            }}
            className={`glitch-button ${terminalAvviato ? 'hidden' : ''}`}
            variant="contained"
            color="success"
            sx={{
              fontFamily: 'Gidori',
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            Avvia Terminale
          </Button>
        </div>
      )}

      {/* Contenuto del terminale visibile solo quando terminalAvviato è True */}
      {terminalAvviato && (
        <>
          {/* Completamento del resto del terminale */}
          {timerAvviato && !timerScaduto && (
            <div className="absolute right-4 bottom-1 font-[Gidole] text-green-400 text-sm z-30">
              <ul>
                {!filiTagliati.rosso && (
                  <li className="flex items-center">
                    <span className="w-20 h-2 rounded-full bg-red-500 mr-2"></span>
                    Filo rosso
                  </li>
                )}
                {!filiTagliati.blu && (
                  <li className="flex items-center">
                    <span className="w-20 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Filo blu
                  </li>
                )}
              </ul>
            </div>
          )}


          {timerAvviato && !timerScaduto && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-black bg-yellow-200 py-1 px-3 rounded-2xl font-mono text-md z-30">⏳ {timer}s</div>
          )}

          {caricamento ? (
            <div className="text-green-400 font-mono text-md animate-pulse flex flex-col items-center">
              <div className="mb-4">Inizializzazione del terminale di sistema...</div>
              <div className="border-4 border-green-400 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
            </div>
          ) : (
            <div className="relative flex flex-col bg-black text-green-400 font-mono text-sm w-[80vw] h-[85vh] p-4 py-6 overflow-hidden shadow-2xl border border-green-500 rounded-2xl transition-all duration-500 ">
              <div
                className={`absolute left-0 top-0 z-10 bg-black p-4 ${drawerAperto ? 'border-r-2 bg-black z-30' : 'opacity-0'} border-green-400 h-full transition-all duration-300 w-60 ${drawerAperto ? 'border-opacity-100' : 'border-opacity-0'}`}
              >
                {drawerAperto && (
                  <div className="text-green-400 mt-10">
                    <ul>
                      {menuLaterali.map((cmd, i) => (
                        <li
                          key={i}
                          className="cursor-pointer text-md text-blue-300 hover:text-green-400 transition-colors"
                          onClick={() => handleCommandClick(cmd)}
                        >
                          {cmd}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div ref={terminalRef} className={`ml-0 ${drawerAperto ? 'md:ml-60' : ''} font-[Gidole] overflow-y-auto overflow_hacking h-full pr-2 mt-5 transition-all overflow-hidden duration-300 z-10`}>
                {righe.map((line, i) => (
                  <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
                ))}
                {pronto && !inputBloccato && (
                  <div className="flex">
                    <span>&gt; </span>
                    <input
                      autoFocus
                      className="bg-transparent font-[Gidole] outline-none text-green-400 flex-1 caret-green-500"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={gestisciComando}
                    />
                    <span className="animate-pulse">█</span>
                  </div>
                )}
              </div>

              <div className={`absolute top-2 left-2 text-2xl text-green-400 cursor-pointer z-50`} onClick={toggleDrawer}>
                <FontAwesomeIcon icon={drawerAperto ? faEye : faEyeSlash} />
              </div>
            </div>
          )}
        </>
      )}
      {timerScaduto ?
        <img className='absolute w-full h-full z-1000 opacity-80' onClick={() => window.location.reload()} src="/img/TimeEndsScreen.png" alt="ERROR SCREEN" />
        :
        ''
      }
    </div>
      
  );
}
